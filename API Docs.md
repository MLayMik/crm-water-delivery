# API Documentation

This technical documentation guides implementing new API methods.

## Instruments

The API implementation utilizes several tools:

* Vue Query: for managing fetching, caching, and updating asynchronous data in Vue applications.

* Zod: for data validation, ensuring the structure and type constraints of incoming data.

* MSW (Mock Service Worker): for creating mocks to emulate server responses during development and testing.

## Schemas

Schemas are used to validate the structure of data within API requests. They ensure that the provided data follows the expected format and type constraints, enhancing the reliability and consistency of the API's data handling processes.

### Structure

Schemas are created using Zod:

```typescript
import { z } from 'zod'

const DataSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().nullable(),
  person_name: z.string()
})
```
**If you need an array schema**

```typescript
export DataArraySchema = z.array(CarSchema)
```

## Normalizers

Normalizers are used to standardize data formats within APIs, making them easier to process and utilize in applications.

### Structure

The normalize function takes a Zod schema as a parameter and returns a TypeScript model.

```typescript
import { DataSchema } from './types'

function normalizer(data: DataSchema): Data {
  const { person_name } = data

  return {
    personName: person_name,
    ...data
  }
}
```
*If schema fields have the same names as a model schema can be spread*

## Endpoints

Endpoints in API are necessary to provide access to various functions and resources, such as retrieving, creating, editing, and deleting. Each endpoint grants access to a specific data operation, with a designated HTTP method (e.g., GET or POST), and is associated with a data schema for validating requests and responses

### Structure

The endpoint has three fields

* **url** must be a string or a function which returns a string
* **method** is one of the HTTP methods
* **schema** is a Zod schema

```typescript
import { type ApiEndpointsAndSchemas } from '../lib'
import { DataArraySchema, DataSchema } from './types'

const endpoints = {
  getData: {
    url: 'example/data',
    method: 'get',
    schema: z.array(DataSchema),
  },
  byId: {
    url: ({ id }: { id: number }) => `example/data/${id}`,
    method: 'get',
    schema: DataSchema,
  },
  create: {
    url: 'example/data'
    method: 'post',
    schema: DataArraySchema
  }
} satisfies ApiEndpointsAndSchemas
```

*If you have a few endpoints with the same prefix you can create a variable with the prefix*

```typescript
const prefix = 'example'
```

ApiEndpointsAndSchemas is a type of endpoint with schema

### Exporting endpoints

```typescript
export { endpoints as dataEndpoints }
```

*Use endpoints in this API and use carsEndpoints in other cases*

## Fetchers

Fetchers interact with the backend server, handling various operations such as retrieving, creating, editing, and deleting data.

### Structure

* The first fetcher gets all data and normalizes their

* The second gets data by ID and normalizes its

* If the fetcher has params you need to create two types the first for static params, and the second for reactive parameters with ToKeyParams if a method of the endpoint is method get

```typescript
import type { ToKeyParams } from '../lib'
import { client } from '../lib'

export async function getData() {
  const { url, method, schema } = endpoints.getData

  const data = await client[method](url, schema)

  return data.map(normalizeData)
}

export interface DataByIdParams {
  id: number
}
export type DataByIdKeyParams = ToKeyParams<DataByIdParams>
export async function dataById({ id }: DataByIdParams) {
  const { url, method, schema } = endpoints.getById

  const data = await client[method](url({ id }), schema)

  return normalizeData(data)
}

export interface CreateData {
  data: Data
}
export function createData({ data }: CreateData) {
  const { url, method, schema } = endpoints.create

  const data = await client[method](url, data, schema)

  return normalizeData(data)
}
```
*DataByIdParams for static*

*DataByIdKeyParams for reactivity*

### Can use static params type for endpoint

```typescript
getById: {
  url: ({ id }: DataByIdParams) => `example/data/${id}`
}
```

*You can pick params if you don't need all*

*If the endpoint has a one-word name you can add to the name an action (create, get, edit, etc)*

## Keys

Vue Query simplifies query caching by using query keys, which trigger requests to refetch data when reactive variables change.

### Structure

Keys are used to define different categories or contexts for fetching data, ensuring clarity and maintainability in the codebase.

```typescript
import type { DataByIdKeyParams } from './api'

const entity = 'example'
const Scopes = {
  All: 'all',
  ById: 'by-id',
} as const

const keys = {
  getData: () => [{ entity, scope: Scopes.All }],
  byId: (
    params: DataByIdKeyParams,
  ) => [{ entity, scope: Scopes.ById, ...params }],
} as const
```

### Exporting

```typescript
export {
  entity as dataEntity,
  keys as dataKeys,
  Scopes as dataScopes,
}
```
*Use the original names in this API and renamed ones in other cases*

## Queries

A query in Vue Query is a declarative dependency on an asynchronous data source, associated with a unique key. It can utilize any Promise-based method, including GET and POST, to fetch data from a server. However, if your method involves modifying data on the server, it's advisable to use Mutations instead.

### Structure

This example shows an implementation of fetchers with the get method. Using keys for params.

* queryOptions for options in vue-query like a function, keys, enabled, refetch, etc

* useQuery for implementation of options in queryOptions

```typescript
import type { DataByIdKeyParams } from './api'
import { queryOptions, useQuery } from '@tanstack/vue-query'
import { paramsAnd, trimKey } from '../lib'
import { dataById, getData } from './api'

export function useDataQuery() {
  return queryOptions({
    queryKeys: keys.getData(),
    queryFn: getData,
  })
}

export function useData() {
  return useQuery(useDataQuery())
}

export function useDataByIdQuery(params: DataByIdKeyParams) {
  return queryOptions({
    queryKeys: keys.byId(params),
    queryFn: (
      { queryKey: [{ id }] },
    ) => dataById({
      id: id!,
    }),
    enabled: paramsAnd(trimKey(params)),
  })
}

export function useDataById(params: DataByIdKeyParams) {
  return useQuery(useDataByIdQuery(params))
}
```

*The function of queryOptions should have a 'Query' at the end of a name*

## Mutations

Unlike queries, mutations are primarily utilized for creating, updating, or deleting data, as well as for performing server-side effects. To facilitate these operations, vue-query provides a useMutation hook.

### Structure

This custom hook utilizes Vue Query's useMutation hook to handle data creation through the createData function from the API.

The hook abstracts away the complexity of mutation handling and provides a simplified interface for creating data within Vue components.

```typescript
import { useMutation } from '@tanstack/vue-query'
import { createData } from './api'

export function useCreateData() {
  return useMutation({
    mutationFn: createData,
  })
}
```

*mutationFn auto provides params to function*

## Mocks

Mocks in APIs emulate real server responses during development and testing.

### Structure

This example uses the faker-js library (faker) to create realistic fake data for the id, name, and content fields.

* The First function returns the Zod schema

* The Second returns normalized data

```typescript
import type { z } from 'zod'
import { faker as f } from '@faker-js/faker'

import { DataSchema } from './types'

export function makeDataMockSchema(): z.infer<typeof DataSchema> {
  return {
    id: f.number.int(),
    name: f.lorem.words(3),
    email: f.internet.email(),
    person_name: f.person.fullName()
  }
}

export function makeDataMock(): Data {
  return normalizeData(makeDataMock())
}
```

### Handlers

Should create for each endpoint handler for faking

```typescript
import type { Handlers } from '../lib'
import { z } from 'zod'
import { mockUrl, mockUrlParam } from '../lib'
import { endpoints } from './api'

export const dataHandlers: Handlers<typeof endpoints, 'Data'> = {
  DataGetData: (() => {
    const { url, method, schema } = endpoints.getData

    return http[method](
      mockUrl(url),
      () => HttpResponse.json<z.infer<typeof schema>>(
        makeArrayMock(makeExperienceLocationSchemaMock),
      ),
    )
  })(),
}
```
*makeArrayMock creates an array of mock data with a random length*

## API implementation

```typescript
import { ref } from 'vue'
import { useRoute } from 'vue-router'

import { useData, useDataById useCreateData } from '@/shared/api/car'

const { data: data, isLoading: isLoadingData } = useData()

const route = useRoute()

const { data: dataById, isLoading: isLoadingDataById } = useDataById({ id: 1 })

const { mutate, isPending } = useCreateData()

const newData = ref<Data>({...})

function submit() {
  mutate({
    data: newData.value
  })
}
```

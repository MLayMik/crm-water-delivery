<script setup lang="ts">
import type { IClient } from '@/shared/types'
import { WTableCell, WTableRow } from '@/shared/ui/WTable'

const props = defineProps<
  { client: IClient }
>()
</script>

<template>
  <WTableRow>
    <WTableCell>{{ props.client.id }}</WTableCell>
    <WTableCell>{{ props.client.name }}</WTableCell>
    <WTableCell>{{ props.client.email }}</WTableCell>
  </WTableRow>
</template>

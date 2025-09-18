export interface IUser {
  token: string
  role: 'admin' | 'courier' | 'client'
  name: string
  email: string
}

export interface IUserStore {
  currentUser: IUser | null
  users: IUser[]
  isAuth: boolean
}

export interface ILoginForm {
  email: string
  password: string
}

export interface IClient {
  id?: number
  name: string
  email: string
}

export interface IClientRepository {
  getAllClients: () => Promise<IClient[]>
  getClientById: (id: number) => Promise<IClient | null>
  createClient: (client: IClient) => Promise<IClient[]>
  updateClient: (client: IClient, id: number) => Promise<IClient[]>
  deleteClient: (id: number) => Promise<IClient[]>
}

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

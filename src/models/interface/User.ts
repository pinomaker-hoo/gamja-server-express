import { Provider } from "./Provider"

export interface UsersAttributes {
  idx?: number
  email: string
  password: string
  name: string
  birth: Date
  provider: Provider
  providerId: string
}

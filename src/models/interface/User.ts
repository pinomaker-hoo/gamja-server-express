import { Provider } from "./Provider"

export interface UserAttributes {
  idx?: number
  email: string
  password?: string
  name: string
  provider: Provider
  providerId?: string
}

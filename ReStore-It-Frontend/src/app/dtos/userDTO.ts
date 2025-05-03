import { ProductDTO } from "./productDTO"

export interface UserDTO{
  id: String,
  name: String,
  email: String,
  password: String
  products: ProductDTO[]
}

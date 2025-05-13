import { CategoryDTO } from "./categoryDTO";
import { UserDTO } from "./userDTO";

export interface ProductDTO{
  id: String,
  image: String,
  name: String,
  description?: String,
  size: String,
  price: number,
  numberOfProducts: Number,
  categories: CategoryDTO[],
  seller: String
  user: UserDTO
}

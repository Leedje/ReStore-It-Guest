import { CategoryDTO } from "./categoryDTO";

export interface ProductDTO{
  id: String,
  name: String,
  description?: String,
  size: String,
  price: number,
  numberOfProducts: Number,
  categories: CategoryDTO[]
}

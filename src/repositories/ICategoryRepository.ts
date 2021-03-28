import ICreateCategoryDTO from "../DTOS/ICreateCategoryDTO";
import Category from "../routes/model/Category";

export default interface ICategoryRepository {
  list(): Promise<Category[]>;
  findByName(name: string): Promise<Category>;
  create({ name, description }: ICreateCategoryDTO): Promise<void>;
}
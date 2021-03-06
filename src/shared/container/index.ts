import { container } from "tsyringe";

import UserTokensRepository from "@modules/accounts/infra/repositories/UserTokensRepository";
import IUserTokensRepository from "@modules/accounts/repositories/IUserTokensRepository";
import CarsRepository from "@modules/cars/infra/typeorm/repositories/CarRepository";
import CarsImageRepository from "@modules/cars/infra/typeorm/repositories/CarsImageRepository";
import ICarsImagesRepository from "@modules/cars/repositories/ICarsImagesRepository";
import ICarsRepository from "@modules/cars/repositories/ICarsRepository";
import RentalsRepository from "@modules/rentals/infra/typeorm/repositories/RentalsRepository";
import IRentalsRepository from "@modules/rentals/repositories/IRentalsRepository";

import UsersRepository from "../../modules/accounts/infra/repositories/UsersRepository";
import IUsersRepository from "../../modules/accounts/repositories/IUsersRepository";
import CategoryRepository from "../../modules/cars/infra/typeorm/repositories/CategoryRepository";
import SpecificationRepository from "../../modules/cars/infra/typeorm/repositories/SpecificationRepository";
import ICategoryRepository from "../../modules/cars/repositories/ICategoryRepository";
import ISpecificationRepository from "../../modules/cars/repositories/ISpecificationRepository";

container.registerSingleton<ICategoryRepository>(
  "CategoryRepository",
  CategoryRepository
);

container.registerSingleton<ISpecificationRepository>(
  "SpecificationRepository",
  SpecificationRepository
);

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);

container.registerSingleton<ICarsRepository>("CarsRepository", CarsRepository);

container.registerSingleton<ICarsImagesRepository>(
  "CarImagesRepository",
  CarsImageRepository
);

container.registerSingleton<IRentalsRepository>(
  "RentalsRepository",
  RentalsRepository
);

container.registerSingleton<IUserTokensRepository>(
  "UserTokensRepository",
  UserTokensRepository
);

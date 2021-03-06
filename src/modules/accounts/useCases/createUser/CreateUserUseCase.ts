import { hash } from "bcrypt";
import { inject, injectable } from "tsyringe";

import AppError from "../../../../shared/errors/AppError";
import IUsersRepository from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
  password: string;
  driver_license: string;
}

@injectable()
export default class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  public async execute({
    name,
    email,
    password,
    driver_license,
  }: IRequest): Promise<void> {
    const userAlreadyExistis = await this.usersRepository.findByEmail(email);

    if (userAlreadyExistis) {
      throw new AppError("User already exists!");
    }

    const passwordHash = await hash(password, 8);

    await this.usersRepository.create({
      name,
      email,
      password: passwordHash,
      driver_license,
    });
  }
}

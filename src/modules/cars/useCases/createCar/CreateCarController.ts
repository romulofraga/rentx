import { Response, Request } from "express";
import { container } from "tsyringe";

import CreateCarUseCase from "./CreateCarUseCase";

export default class CreateCarController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const {
      name,
      description,
      daily_rate,
      fine_amount,
      license_plate,
      brand,
      category_id,
    } = request.body;

    const createCarUseCase = container.resolve(CreateCarUseCase);

    const car = await createCarUseCase.execute({
      name,
      description,
      daily_rate,
      fine_amount,
      license_plate,
      brand,
      category_id,
    });

    return response.status(201).json(car);
  }
}

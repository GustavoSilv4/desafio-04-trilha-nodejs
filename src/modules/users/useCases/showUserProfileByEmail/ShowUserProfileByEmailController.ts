/* eslint-disable consistent-return */
/* eslint-disable prettier/prettier */
import { Request, Response } from 'express';

import { ShowUserProfileByEmailUseCase } from './ShowUserProfileByEmailUseCase';

class ShowUserProfileByEmailController {
  constructor(
    private showUserProfileByEmailUseCase: ShowUserProfileByEmailUseCase
  ) {}

  handle(request: Request, response: Response): Response {
    const { email } = request.params;

    try {
      const user = this.showUserProfileByEmailUseCase.execute({ email });

      return response.status(200).json(user);
    } catch (error) {
      if (error) {
        return response.status(404).json({ error: error.message });
      }
    }
  }
}

export { ShowUserProfileByEmailController };

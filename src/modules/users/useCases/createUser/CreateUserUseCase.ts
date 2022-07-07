/* eslint-disable prettier/prettier */
import { User } from '../../model/User';
import { IUsersRepository } from '../../repositories/IUsersRepository';

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    const emailIsExist = this.usersRepository.findByEmail(email);

    if (emailIsExist) {
      throw new Error(`User ${email} already exists`);
    }

    const userCreated = this.usersRepository.create({ email, name });

    return userCreated;
  }
}

export { CreateUserUseCase };

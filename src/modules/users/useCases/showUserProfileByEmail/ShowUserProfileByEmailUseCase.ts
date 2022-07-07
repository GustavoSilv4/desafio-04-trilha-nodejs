/* eslint-disable prettier/prettier */
import { User } from '../../model/User';
import { UsersRepository } from '../../repositories/implementations/UsersRepository';

interface IRequest {
  email: string;
}

class ShowUserProfileByEmailUseCase {
  constructor(private usersRepository: UsersRepository) {}

  execute({ email }: IRequest): User {
    const user = this.usersRepository.findByEmail(email);

    return user;
  }
}

export { ShowUserProfileByEmailUseCase };

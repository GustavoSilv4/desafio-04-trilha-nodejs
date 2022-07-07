/* eslint-disable prettier/prettier */
import { User } from '../../model/User';
import { IUsersRepository } from '../../repositories/IUsersRepository';

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const listUsers = this.usersRepository.list();

    return listUsers;
  }
}

export { ListAllUsersUseCase };

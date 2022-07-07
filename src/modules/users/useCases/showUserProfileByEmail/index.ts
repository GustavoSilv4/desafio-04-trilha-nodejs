/* eslint-disable prettier/prettier */
import { UsersRepository } from '../../repositories/implementations/UsersRepository';
import { ShowUserProfileByEmailController } from './ShowUserProfileByEmailController';
import { ShowUserProfileByEmailUseCase } from './ShowUserProfileByEmailUseCase';

const userRepository = UsersRepository.getInstance();

const showUserProfileByEmailUseCase = new ShowUserProfileByEmailUseCase(
  userRepository
);

const showUserProfileByEmailController = new ShowUserProfileByEmailController(
  showUserProfileByEmailUseCase
);

export { showUserProfileByEmailController };

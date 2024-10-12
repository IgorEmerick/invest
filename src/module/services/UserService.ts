import { HttpError } from '../../shared/errors/HttpError';
import { ICypherProvider } from '../../shared/providers/models/ICypherProvider';
import { User } from '../infra/database/entities/User';
import { IUserRepository } from '../infra/database/repositories/models/IUserRepository';
import { CreateUserRequest } from '../types/CreateUserRequest';
import { isPasswordValid } from '../utils/isPasswordValid';

export class UserService {
  constructor(
    private userRepository: IUserRepository,
    private cryptoJsCypherProvider: ICypherProvider,
  ) {}

  async create({ email, name, password }: CreateUserRequest): Promise<User> {
    const validPassword = isPasswordValid(password);

    if (!validPassword) throw new HttpError(400, 'Invalid password');

    const user = await this.userRepository.findByEmail(email);

    if (user) throw new HttpError(400, 'User already exists');

    const passwordHash =
      await this.cryptoJsCypherProvider.generateHash(password);

    return this.userRepository.create({ email, name, password: passwordHash });
  }
}

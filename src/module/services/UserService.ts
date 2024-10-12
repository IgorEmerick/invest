import { HttpError } from '../../shared/errors/HttpError';
import { ICypherProvider } from '../../shared/providers/models/ICypherProvider';
import { ITokenProvider } from '../../shared/providers/models/ITokenProvider';
import { User } from '../infra/database/entities/User';
import { IUserRepository } from '../infra/database/repositories/models/IUserRepository';
import { AuthenticateUserRequest } from '../types/AuthenticateUserRequest';
import { CreateUserRequest } from '../types/CreateUserRequest';
import { isPasswordValid } from '../utils/isPasswordValid';

export class UserService {
  constructor(
    private userRepository: IUserRepository,
    private cryptoJsCypherProvider: ICypherProvider,
    private jwtTokenProvider: ITokenProvider,
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

  async authenticate({
    email,
    password,
  }: AuthenticateUserRequest): Promise<string> {
    const user = await this.userRepository.findByEmail(email);

    if (!user) throw new HttpError(401, 'Invalid authentication');

    const passwordMatch = await this.cryptoJsCypherProvider.compareHash({
      hash: user.password,
      message: password,
    });

    if (!passwordMatch) throw new HttpError(401, 'Invalid authentication');

    return this.jwtTokenProvider.generateToken({ id: user.id });
  }
}

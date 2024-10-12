import { User } from '../../entities/User';

export interface IUserRepository {
  create(request: Partial<User>): Promise<User>;
  findByEmail(email: string): Promise<User>;
  findById(id: string): Promise<User>;
}

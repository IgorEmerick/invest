import { DataSource, MongoRepository } from 'typeorm';
import { User } from '../../entities/User';
import { IUserRepository } from '../models/IUserRepository';

export class UserRepository implements IUserRepository {
  private ormRepository: MongoRepository<User>;

  constructor(mongoDataSource: DataSource) {
    this.ormRepository = mongoDataSource.getMongoRepository(User);
  }

  async create(request: Partial<User>): Promise<User> {
    const user = this.ormRepository.create(request);

    return this.ormRepository.save(user);
  }

  async findByEmail(email: string): Promise<User> {
    return this.ormRepository.findOneBy({ email });
  }

  async findById(id: string): Promise<User> {
    return this.ormRepository.findOneBy({ id });
  }
}

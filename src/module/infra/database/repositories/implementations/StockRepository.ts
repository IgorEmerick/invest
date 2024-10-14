import { DataSource, MongoRepository } from 'typeorm';
import { Stock } from '../../entities/Stock';
import { IStockRepository } from '../models/IStockRepository';

export class StockRepository implements IStockRepository {
  private ormRepository: MongoRepository<Stock>;

  constructor(mongoDataSource: DataSource) {
    this.ormRepository = mongoDataSource.getMongoRepository(Stock);
  }

  async create(request: Partial<Stock>): Promise<Stock> {
    const stock = this.ormRepository.create(request);

    return this.ormRepository.save(stock);
  }

  async update(request: Stock): Promise<Stock> {
    return this.ormRepository.save(request);
  }

  async findByCode(code: string): Promise<Stock> {
    return this.ormRepository.findOneBy({ code });
  }
}

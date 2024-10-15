import { Redis } from 'ioredis';
import { SetCacheRequest } from '../../types/SetCacheRequest';
import { ICacheProvider } from '../models/ICacheProvider';

export class RedisCacheProvider implements ICacheProvider {
  private redisClient: Redis;

  constructor() {
    this.redisClient = new Redis({});
  }

  async set({ key, value }: SetCacheRequest): Promise<void> {
    await this.redisClient.set(key, JSON.stringify(value));
  }

  async get<T>(key: string): Promise<T> {
    const value = await this.redisClient.get(key);

    return JSON.parse(value) as T;
  }

  async delete(key: string): Promise<void> {
    await this.redisClient.del(key);
  }
}

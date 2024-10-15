import { SetCacheRequest } from '../../types/SetCacheRequest';

export interface ICacheProvider {
  set(request: SetCacheRequest): Promise<void>;
  get<T>(key: string): Promise<T>;
  delete(key: string): Promise<void>;
}

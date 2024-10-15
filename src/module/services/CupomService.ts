import { CUPOM_KEY } from '../../config/redis/keys';
import { ICacheProvider } from '../../shared/providers/models/ICacheProvider';

interface IRequest {
  cupom: number;
}

export class CupomService {
  constructor(private redisCacheProvider: ICacheProvider) {}

  async register({ cupom }: IRequest): Promise<void> {
    const oldCupom = await this.redisCacheProvider.get(CUPOM_KEY);

    if (oldCupom) await this.redisCacheProvider.delete(CUPOM_KEY);

    await this.redisCacheProvider.set({ key: CUPOM_KEY, value: cupom });
  }
}

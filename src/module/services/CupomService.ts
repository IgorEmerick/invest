import { ICacheProvider } from '../../shared/providers/models/ICacheProvider';

interface IRequest {
  cupom: number;
}

export class CupomService {
  constructor(private redisCacheProvider: ICacheProvider) {}

  async register({ cupom }: IRequest): Promise<void> {
    const cupomKey = 'cupom';

    const oldCupom = await this.redisCacheProvider.get(cupomKey);

    if (oldCupom) await this.redisCacheProvider.delete(cupomKey);

    await this.redisCacheProvider.set({ key: cupomKey, value: cupom });
  }
}

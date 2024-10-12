import { SHA3 } from 'crypto-js';
import { CompareHashRequest } from '../../types/CompareHashRequest';
import { ICypherProvider } from '../models/ICypherProvider';

export class CryptoJsCypherProvider implements ICypherProvider {
  async generateHash(message: string): Promise<string> {
    return SHA3(message).toString();
  }

  async compareHash({ hash, message }: CompareHashRequest): Promise<boolean> {
    const messageHash = SHA3(message).toString();

    return hash === messageHash;
  }
}

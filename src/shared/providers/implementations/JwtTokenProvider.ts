import { sign, verify } from 'jsonwebtoken';
import { ITokenProvider } from '../models/ITokenProvider';
import { readFile } from 'fs/promises';

export class JwtTokenProvider implements ITokenProvider {
  async generateToken(payload: object): Promise<string> {
    const privateKey = await readFile('./jwt-key', 'utf8');

    return sign(payload, privateKey, {
      expiresIn: '1d',
      algorithm: 'RS256',
    });
  }

  async decodeToken<T>(token: string): Promise<T> {
    const publicKey = await readFile('./jwt-key.pub', 'utf8');

    try {
      return verify(token, publicKey, { algorithms: ['RS256'] }) as T;
    } catch (error) {
      return undefined;
    }
  }
}

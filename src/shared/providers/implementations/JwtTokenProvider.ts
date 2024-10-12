import { sign } from 'jsonwebtoken';
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
}

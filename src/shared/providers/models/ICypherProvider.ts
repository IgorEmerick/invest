import { CompareHashRequest } from '../../types/CompareHashRequest';

export interface ICypherProvider {
  generateHash(message: string): Promise<string>;
  compareHash(request: CompareHashRequest): Promise<boolean>;
}

export interface ITokenProvider {
  generateToken(payload: object): Promise<string>;
  decodeToken<T>(token: string): Promise<T>;
}

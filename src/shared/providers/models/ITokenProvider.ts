export interface ITokenProvider {
  generateToken(payload: object): Promise<string>;
}

export function isPasswordValid(password: string): boolean {
  return (
    password.length >= 16 &&
    password.length <= 32 &&
    /\d/g.test(password) &&
    /a-z/g.test(password) &&
    /A-Z/g.test(password) &&
    /[^a-z0-9]/gi.test(password)
  );
}

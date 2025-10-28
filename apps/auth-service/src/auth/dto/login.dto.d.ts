export declare class LoginDto {
  readonly email: string;
  readonly password: string;
  readonly deviceFingerprinting: string;
  constructor(email: string, password: string, deviceFingerprinting: string);
  toString(): string;
}

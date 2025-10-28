import { Strategy } from 'passport-jwt';
import { RsaKeyService } from '../rsa-key/rsa-key.service';
declare const JwtAuthStrategy_base: new (
  ...args:
    | [opt: import('passport-jwt').StrategyOptionsWithoutRequest]
    | [opt: import('passport-jwt').StrategyOptionsWithRequest]
) => Strategy & {
  validate(...args: any[]): unknown;
};
export declare class JwtAuthStrategy extends JwtAuthStrategy_base {
  private readonly rsaKeyService;
  constructor(rsaKeyService: RsaKeyService);
  validate(payload: any): Promise<{
    userId: any;
    role: any;
  }>;
}
export {};

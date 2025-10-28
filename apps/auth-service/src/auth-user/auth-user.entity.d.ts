import { Role } from '@app/common/enums/role.enum';
import { AuthUserJwtRefreshToken } from './auth-user-jwt-refresh-token.entity';
export declare class AuthUser {
  id: number;
  uuid: string;
  email: string;
  password: string;
  active: boolean;
  serviceCode: number;
  serviceCodeUUID: string;
  role: Role;
  jwtRefreshToken: AuthUserJwtRefreshToken;
  createdAt: Date;
}

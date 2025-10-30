import {
  IsEmail,
  IsHexadecimal,
  IsIn,
  IsString,
  Length,
} from 'class-validator';

export type ClientKind = 'admin-app' | 'client-app';

export class LoginDto {
  @IsEmail({}, { message: 'Email address required' })
  readonly email: string;

  @IsString({ message: 'Password must be a string' })
  @Length(8, 72, { message: 'Password must be between 8 and 72 characters' })
  readonly password: string;

  @IsString({ message: 'Password must be a string' })
  @IsHexadecimal({ message: 'Device ID must be hexadecimal' })
  @Length(32, 32, {
    message: 'Device Fingerprinting must be between 32 characters',
  })
  readonly deviceId: string;

  @IsIn(['admin-app', 'client-app'], {
    message: 'Client must be either "admin-app" or "client-app"',
  })
  readonly client!: ClientKind;
}

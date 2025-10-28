import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
export declare class AuthController {
  private readonly authService;
  constructor(authService: AuthService);
  getHello(): Promise<{
    message: string;
  }>;
  login(
    loginDto: LoginDto,
  ): Promise<import('./dto/jwt-tokens.dto').JwtTokensDto>;
}

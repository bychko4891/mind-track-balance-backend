import { AuthUserService } from './auth-user.service';
import { SignupDto } from './dto/signup.dto';
export declare class AuthUserController {
  private readonly authUserService;
  constructor(authUserService: AuthUserService);
  signup(signupDto: SignupDto): Promise<void>;
  getHello(): Promise<{
    message: string;
  }>;
}

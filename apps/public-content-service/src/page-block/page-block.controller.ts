import { Controller } from '@nestjs/common';

@Controller('/api/v1/page-content')
export class PageBlockController {
  constructor() {}

  // @Get()
  // @Roles(Role.MODERATOR)
  // @UseGuards(AuthGuard('jwt'), RolesGuard)
  // async getHello() {
  //     return { message: '✅ Все працює!' };
  // }

  // @Post("/login")
  // @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
  // async login(@Body()loginDto: LoginDto) {
  //     return await this.authService.login(loginDto);
  // }
}

import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Roles } from '@app/common/decorators/roles.decorator';
import { Role } from '@app/common/enums/role.enum';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from '@app/common/guards/roles.guard';
import { SeoObjectService } from './seo-object.service';

@Controller('/api/v1/seo')
export class SeoObjectController {
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

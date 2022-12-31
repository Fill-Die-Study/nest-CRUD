import { Controller } from '@nestjs/common';
import { UseGuards } from '@nestjs/common/decorators';
import { Post } from '@nestjs/common/decorators/http/request-mapping.decorator';
import {
  Body,
  Req,
} from '@nestjs/common/decorators/http/route-params.decorator';
import { ValidationPipe } from '@nestjs/common/pipes';
import { AuthGuard } from '@nestjs/passport/dist/auth.guard';
import { AuthService } from './auth.service';
import { AuthCredentialDto } from './dto/auth-credentials.dto';
import { User } from './user.entity';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  SignUp(
    @Body(ValidationPipe) authCredentialDto: AuthCredentialDto,
  ): Promise<User> {
    return this.authService.signUp(authCredentialDto);
  }

  @Post('/signin')
  SignIn(
    @Body(ValidationPipe) authCredentialDto: AuthCredentialDto,
  ): Promise<{ accessToken: string }> {
    return this.authService.signIn(authCredentialDto);
  }

  @Post('/test')
  @UseGuards(AuthGuard())
  test(@Req() req) {
    console.log('req', req);
  }
}

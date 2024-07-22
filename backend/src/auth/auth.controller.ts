// auth.controller.ts
import {
  Controller,
  Post,
  HttpCode,
  Body,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import {
  ApiBadRequestResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import { LoginUserDto, UserCreateDTO } from 'src/user/user.dto';
import { UserService } from 'src/user/user.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService
  ) {}

  @Post('create')
  async create(@Body() newUser: UserCreateDTO) {
    return this.userService.createUser(newUser);
  }

  /*  @ApiTags('login')
  @ApiOperation({ description: 'Login endpoint' })
  @ApiOkResponse({ description: ReasonPhrases.CREATED, schema: {} })
  @HttpCode(StatusCodes.CREATED)
  @ApiBadRequestResponse() */
  @Post('login')
  async login(@Body() userLogin: LoginUserDto) {
    const user = await this.authService.validateUser(
      userLogin.username,
      userLogin.password
    );

    console.log(user);

    if (!user) {
      throw new HttpException('Credentials Invalid', HttpStatus.FORBIDDEN);
    }
    return this.authService.login(user);
  }
}

// auth.controller.ts
import { Controller, Post, HttpCode } from '@nestjs/common';
import { AuthService } from './auth.service';
import {
  ApiBadRequestResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiTags('login')
  @ApiOperation({ description: 'Login endpoint' })
  @ApiOkResponse({ description: ReasonPhrases.CREATED, schema: {} })
  @HttpCode(StatusCodes.CREATED)
  @ApiBadRequestResponse()
  @Post('login')
  async login() {
    return this.authService.login();
  }
}

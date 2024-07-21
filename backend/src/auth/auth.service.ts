// auth.service.ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  async login() {
    return {
      msg: 'login',
      status: 200,
    };
  }
}

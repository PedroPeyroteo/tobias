// auth.service.ts
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginUserDto, User } from 'src/user/user.dto';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcryptjs';
import { log } from 'console';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService
  ) {}

  async validateUser(username: string, pass: string): Promise<User | null> {
    let user: User;

    try {
      user = await this.userService.findOne(username);

      const passCompare = await bcrypt.compare(pass, user.password);
      console.log(user);

      if (user && passCompare) {
        return user;
      }
    } catch (e) {
      throw new HttpException('No user found', HttpStatus.NOT_FOUND);
    }

    return null;
  }

  async login(user: User) {
    const payload = { username: user.username, sub: user.id };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}

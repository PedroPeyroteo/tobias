import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import * as bcrypt from 'bcryptjs';
import { User, UserCreateDTO, UserFindOneDTO } from './user.dto';

@Injectable()
export class UserService {
  constructor(private readonly userRepo: UserRepository) {}

  async findOne(username: string): Promise<User | undefined> {
    return await this.userRepo.findOne(username);
  }

  async createUser(newUser: UserCreateDTO): Promise<void> {
    const hashedPassword = await bcrypt.hash(newUser.password, 10);

    const createUser: UserCreateDTO = {
      username: newUser.username,
      password: hashedPassword,
    };

    try {
      await this.userRepo.createUser(createUser);
    } catch (e) {
      throw new HttpException('User already created', HttpStatus.BAD_REQUEST);
    }
  }
}

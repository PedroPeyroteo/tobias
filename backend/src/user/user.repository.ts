import { Injectable } from '@nestjs/common';
import { type Knex } from 'knex';
import { InjectConnection } from 'nest-knexjs';
import { User, UserCreateDTO, UserFindOneDTO } from './user.dto';

@Injectable()
export class UserRepository {
  constructor(@InjectConnection() private readonly db: Knex) {}

  async findOne(username: string): Promise<User | undefined> {
    return await this.db<User>('users')
      .select('id')
      .select('username')
      .select('password')
      .where('username', username)
      .first();
  }

  async createUser(newUser: UserCreateDTO): Promise<void> {
    await this.db('users').insert(newUser);
  }
}

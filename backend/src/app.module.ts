import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { KnexModule } from 'nest-knexjs';
import { AuthModule } from './auth/auth.module';
import { HealthModule } from './health/health.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    KnexModule.forRoot({
      config: {
        client: 'mysql2',
        version: '8.0',
        connection: {
          database: 'tobias-waiter',
          user: 'admin',
          password: 'admin',
          host: 'localhost',
          port: 3306,
          ssl: false,
        },
      },
    }),
    HealthModule,
    AuthModule,
    UserModule,
  ],
})
export class AppModule {}

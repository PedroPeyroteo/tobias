// auth.module.ts
import { PassportModule } from '@nestjs/passport';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from 'src/user/user.module';

console.log('JWT_SECRET_KEY:', process.env.JWT_SECRET_KEY);
console.log('JWT_EXPIRES_IN:', process.env.JWT_EXPIRES_IN);

@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule.register({
      secret:
        process.env.JWT_SECRET_KEY ||
        'd4e7c9b7c16d6e4b9f482b9a0e3f1c5a7e2d3c4b5a6e7d8c9f1b0a1b2c3d4e5f',
      signOptions: { expiresIn: process.env.JWT_EXPIRES_IN || '60m' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}

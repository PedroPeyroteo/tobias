import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  MinLength,
} from 'class-validator';

class User {
  @IsNumber()
  id: number;

  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  password: string;
}

class LoginUserDto {
  @IsString()
  username: string;

  @IsString()
  password: string;
}

class UserCreateDTO {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  password: string;
}

class UserFindOneDTO {
  id: number;

  username: string;

  password: string;
}

export { User, UserCreateDTO, UserFindOneDTO, LoginUserDto };

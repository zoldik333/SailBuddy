import { BadRequestException, Injectable } from '@nestjs/common';
import { UserService } from '../models/users/user.service';
import { CreateUserDto } from 'src/models/users/dto/create-user.dto';
import { JwtService } from '@nestjs/jwt';
import * as argon2 from 'argon2';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(login: string, password: string): Promise<any> {
    const user = await this.usersService.findOneEmailOrPhone(login);
    if (!user) {
      throw new BadRequestException('User not found');
    }
    const isMatch = await argon2.verify(user.password, password);
    if (!isMatch) {
      throw new BadRequestException('Password does not match');
    }
    return user;
  }

  createToken(user: any) {
    const payload = { email: user.email, userId: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async getUserFromRequest(req: any, jwtToken: any) {
    const user = req.user;
    if (!user) {
      throw new BadRequestException('Unauthenticated');
    }
    if (jwtToken) {
      user.email = jwtToken.email;
    }
    return await this.usersService.findOneEmail(user.email);
  }

  async signInService(user: any, reqUser: any) {
    let token: { access_token: string };
    if (!user) {
      token = await this.register(reqUser);
    } else {
      token = await this.login(reqUser);
    }
    return token;
  }

  async login(user: { login: string; password: string }) {
    const { login, password } = user;
    const userInfo = await this.validateUser(login, password);
    return this.createToken(userInfo);
  }

  async register(user: CreateUserDto) {
    const existingUser = await this.usersService.findOneEmail(user.email);
    if (existingUser) {
      throw new BadRequestException('User using this email already exists');
    }
    user.password = await argon2.hash(user.password);

    const newUser = await this.usersService.create(user);
    return this.createToken(newUser);
  }

  async getProfile(user: any) {
    return await this.usersService.findOneEmail(user.email);
  }

  async updateProfile(user: CreateUserDto) {
    const existingUser = await this.usersService.findOneEmail(user.email);
    if (!existingUser) {
      throw new BadRequestException('User not found');
    }
    const argon2HashRegex = /^\$argon2(id|i|d)\$.+$/;
    const isArgon2Hash = argon2HashRegex.test(user.password);
    if (!isArgon2Hash) {
      user.password = await argon2.hash(user.password);
    }
    await this.usersService.update(existingUser.id, user);
  }

  async switchUserLanguage(user: any) {
    const existingUser = await this.usersService.findOneEmail(user.email);
    if (!existingUser) {
      throw new BadRequestException('User not found');
    }
    const userDto = {
      surname: existingUser.surname,
      lastname: existingUser.lastname,
      email: existingUser.email,
      password: existingUser.password,
      phone: existingUser.phone,
      language: existingUser.language,
      picture: existingUser.picture
        ? existingUser.picture.toString('base64')
        : '',
    };
    await this.usersService.switchLanguage(existingUser.id, userDto);
  }
}

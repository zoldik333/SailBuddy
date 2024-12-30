import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Put,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './guards/jwt.guard';
import { Public } from '../common/constants/metadata';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { LoginDto, RegisterDto, Token } from './dto/auth-dto';
import { User } from 'src/models/users/entities/user.entity';
import { CreateUserDto } from 'src/models/users/dto/create-user.dto';

@Controller('auth')
@ApiTags('Authentication')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('login')
  @ApiOperation({ summary: 'Login a user' })
  @ApiResponse({
    status: 200,
    description: 'The user has successfully logged in.',
  })
  @ApiResponse({ status: 401, description: 'Unauthorized: Invalid password' })
  @ApiResponse({ status: 404, description: 'User not found' })
  @ApiBody({ type: LoginDto })
  @ApiResponse({ type: Token })
  async login(@Body() loginBody: LoginDto) {
    return await this.authService.login(loginBody);
  }

  @Public()
  @Post('register')
  @ApiOperation({ summary: 'Register a new user' })
  @ApiResponse({ status: 201, description: 'User created successfully.' })
  @ApiResponse({ status: 400, description: 'Bad request: registration failed' })
  @ApiBody({ type: RegisterDto })
  @ApiResponse({ type: Token })
  async register(@Body() registerBody: RegisterDto) {
    return await this.authService.register(registerBody);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  @ApiBearerAuth('access-token')
  @ApiOperation({ summary: 'Get the user profile' })
  @ApiResponse({ status: 200, description: 'Profile retrieved successfully.' })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized: authentication required',
  })
  @ApiResponse({ type: User })
  async getProfile(@Req() request: any) {
    return await this.authService.getProfile(request.user);
  }

  @Put('profile')
  @ApiBearerAuth('access-token')
  @ApiOperation({ summary: 'Update the user profile' })
  @ApiResponse({ status: 200, description: 'Profile updated successfully.' })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized: authentication required',
  })
  @ApiBody({ type: RegisterDto })
  async updateProfile(@Body() body: CreateUserDto) {
    return await this.authService.updateProfile(body);
  }
}

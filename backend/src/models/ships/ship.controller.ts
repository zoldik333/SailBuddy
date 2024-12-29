import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Req,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { CreateShipDto, Ship } from './dto/create-ship.dto';
import { ShipService } from './ship.service';
import { UserService } from "../users/user.service";
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@UseGuards(JwtAuthGuard)
@ApiTags('Ships')
@ApiBearerAuth('access-token')
@Controller('ships')
export class ShipController {
  constructor(
    private readonly shipService: ShipService,
    private readonly userService: UserService,
  ) {}

  @Get()
  @ApiOperation({ summary: 'Get ship owned by the user' })
  @ApiResponse({
    status: 200,
    description: 'Ship retrieved successfully.',
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized: authentication required',
  })
  @ApiResponse({ type: [Ship] })
  async getUserArea(@Req() request: any) {
    const userId = request.user.userId;
    const user = await this.userService.findOneId(userId);
    if (!user) {
      throw 'User not found.';
    }
    return await this.shipService.getByUserId(user);
  }
}

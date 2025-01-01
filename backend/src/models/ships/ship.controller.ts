import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
  Put,
  Req,
  UseGuards,
} from '@nestjs/common';
import { CreateShipDto, ShipDto, Ship } from './dto/create-ship.dto';
import { ShipService } from './ship.service';
import { UserService } from '../users/user.service';
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
  @ApiResponse({ type: Ship })
  async getUserShip(@Req() request: any) {
    const userId = request.user.userId;
    const user = await this.userService.findOneId(userId);
    if (!user) {
      throw new BadRequestException('User not found.');
    }
    return await this.shipService.getByUser(user);
  }

  @Post()
  @ApiOperation({ summary: 'Create a new ship' })
  @ApiResponse({ status: 201, description: 'Ressource created successfully.' })
  @ApiResponse({ status: 400, description: 'Bad request: creation failed' })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized: authentication required',
  })
  @ApiBody({ type: ShipDto })
  async createUserShip(@Body() body: ShipDto, @Req() request: any) {
    const user = await this.userService.findOneId(request.user.userId);
    if (!user) {
      throw new BadRequestException('User not found.');
    }

    const existingShip = await this.shipService.getByUser(user);
    if (existingShip) {
      throw new BadRequestException('User already exists with ship.');
    }

    const newShip: CreateShipDto = {
      name: body.name,
      equipped: body.equipped,
      tracked: body.tracked,
      userId: request.user.userId,
      water_max_capacity: body.water_max_capacity,
      electricity_max_capacity: body.electricity_max_capacity,
    };
    return await this.shipService.create(newShip);
  }

  @Put()
  @ApiOperation({ summary: 'Update ship' })
  @ApiResponse({ status: 201, description: 'Ressource updated successfully.' })
  @ApiResponse({ status: 400, description: 'Bad request: update failed' })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized: authentication required',
  })
  @ApiBody({ type: ShipDto })
  async updateUserShip(@Body() body: ShipDto, @Req() request: any) {
    const user = await this.userService.findOneId(request.user.userId);
    if (!user) {
      throw new BadRequestException('User not found.');
    }

    const existingShip = await this.shipService.getByUser(user);
    if (!existingShip) {
      throw new BadRequestException(`No ship found for user ${user.id}`);
    }

    const newShip: CreateShipDto = {
      name: body.name,
      equipped: body.equipped,
      tracked: body.tracked,
      userId: request.user.userId,
      water_max_capacity: body.water_max_capacity,
      electricity_max_capacity: body.electricity_max_capacity,
    };
    return await this.shipService.update(existingShip.id, newShip);
  }
}

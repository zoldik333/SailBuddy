import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import {
  BadRequestException,
  Controller,
  Get,
  Req,
  UseGuards,
} from '@nestjs/common';
import { Ressource } from '../ships/dto/create-ship.dto';
import { ShipService } from '../ships/ship.service';
import { UserService } from '../users/user.service';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@UseGuards(JwtAuthGuard)
@ApiTags('Ressources')
@ApiBearerAuth('access-token')
@Controller('ressources')
export class RessourceController {
  constructor(
    private readonly shipService: ShipService,
    private readonly userService: UserService,
  ) {}
  @Get()
  @ApiOperation({ summary: 'Get ressources for ship' })
  @ApiResponse({
    status: 200,
    description: 'Ressources retrieved successfully.',
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized: authentication required',
  })
  @ApiResponse({ type: [Ressource] })
  async getShipRessources(@Req() request: any) {
    const userId = request.user.userId;
    const user = await this.userService.findOneId(userId);
    if (!user) {
      throw new BadRequestException('User not found.');
    }

    const ship = await this.shipService.getByUser(user);
    if (!ship) {
      throw new BadRequestException('Ship not found.');
    }

    return await this.shipService.getRessourcesByShip(ship);
  }
}

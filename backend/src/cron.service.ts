import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { UserService } from './models/users/user.service';
import { ShipService } from './models/ships/ship.service';
import { RessourceService } from './models/ressources/ressource.service';
import { CreateRessourceDto } from './models/ressources/dto/create-ressource.dto';

@Injectable()
export class CronService {
  private readonly userService: UserService;
  private readonly shipService: ShipService;
  private ressourceService: RessourceService;
  constructor(
    userService: UserService,
    shipService: ShipService,
    ressourceService: RessourceService,
  ) {
    this.userService = userService;
    this.shipService = shipService;
    this.ressourceService = ressourceService;
    console.log('In cron service');
  }

  @Cron('*/15 * * * * *') async handleCron() {
    console.log('Checking ressources in cronjob.');
    const users = await this.userService.findAll();
    for (const user of users) {
      const ship = await this.shipService.getByUser(user);
      if (ship) {
        const ressources = await this.shipService.getRessourcesByShip(ship);
        for (const ressource of ressources) {
          if (ressource.actual_capacity > 0) {
            ressource.actual_capacity -= ressource.max_capacity * 0.0167;
          } else {
            ressource.actual_capacity = ressource.max_capacity;
          }
          const ressourceDto: CreateRessourceDto = {
            actual_capacity: Math.round(ressource.actual_capacity),
            max_capacity: ressource.max_capacity,
            type: ressource.type,
            shipId: ressource.ship?.id,
          };
          await this.ressourceService.update(ressource.id, ressourceDto);
        }
      }
    }
  }
}

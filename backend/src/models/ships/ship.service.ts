import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateShipDto } from './dto/create-ship.dto';
import { Ship } from './entities/ship.entity';
import { User } from '../users/entities/user.entity';
import { Ressource } from '../ressources/entities/ressource.entity';

@Injectable()
export class ShipService implements OnApplicationBootstrap {
  constructor(
    @InjectRepository(Ship)
    private readonly shipsRepository: Repository<Ship>,

    @InjectRepository(User)
    private readonly userRepository: Repository<User>,

    @InjectRepository(Ressource)
    private readonly ressourceRepository: Repository<Ressource>,
  ) {}

  async onApplicationBootstrap() {
    console.log('On application boostrap ships !');
    const shipsCount = await this.shipsRepository.count();
    if (shipsCount === 0) {
      const user = await this.userRepository.findOne({
        where: { id: 1 }, // Id for user Amelie Ramet init onstart
      });
      if (user) {
        await this.shipsRepository.save([
          {
            name: 'Poséïdon',
            equipped: true,
            tracked: true,
            user: user,
          },
        ]);
        console.log('Database seeded with initial ship for user Amelie Ramet');
      } else {
        console.log(
          'Database not seeded with initial ship, user Amelie Ramet not created yet',
        );
      }
    }
  }

  async create(createShipDto: CreateShipDto): Promise<Ship> {
    const user = await this.userRepository.findOne({
      where: { id: createShipDto.userId },
    });
    if (!user) {
      throw new Error('User not found');
    }

    const ship = new Ship();
    ship.name = createShipDto.name;
    ship.equipped = createShipDto.equipped;
    ship.tracked = createShipDto.tracked;
    ship.user = user;
    const savedShip = await this.shipsRepository.save(ship);

    const water = new Ressource();
    water.max_capacity = createShipDto.water_max_capacity;
    water.actual_capacity = createShipDto.water_max_capacity;
    water.type = 'Water';
    water.ship = savedShip;
    await this.ressourceRepository.save(water);

    const electricity = new Ressource();
    electricity.max_capacity = createShipDto.electricity_max_capacity;
    electricity.actual_capacity = createShipDto.electricity_max_capacity;
    electricity.type = 'Electricity';
    electricity.ship = savedShip;
    await this.ressourceRepository.save(electricity);

    return savedShip;
  }

  async findAll(): Promise<Ship[]> {
    return this.shipsRepository.find();
  }

  findOneId(id: number): Promise<Ship | null> {
    return this.shipsRepository.findOneBy({ id: id });
  }

  async remove(id: string): Promise<void> {
    await this.shipsRepository.delete(id);
  }

  async update(id: number, ship: CreateShipDto) {
    await this.shipsRepository.update(id, ship);
  }

  async getByUser(user: User): Promise<Ship | null> {
    return this.shipsRepository.findOne({ where: { user: user } });
  }

  async getRessourcesByShip(ship: Ship): Promise<Ressource[]> {
    return this.ressourceRepository.find({ where: { ship: ship } });
  }
}

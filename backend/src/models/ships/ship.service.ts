import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateShipDto } from './dto/create-ship.dto';
import { Ship } from './entities/ship.entity';
import { User } from '../users/entities/user.entity';

@Injectable()
export class ShipService {
  constructor(
    @InjectRepository(Ship)
    private readonly shipsRepository: Repository<Ship>,

    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

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

    return await this.shipsRepository.save(ship);
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
}

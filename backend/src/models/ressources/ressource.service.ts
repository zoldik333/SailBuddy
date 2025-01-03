import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRessourceDto } from './dto/create-ressource.dto';
import { Ressource } from './entities/ressource.entity';
import { Ship } from '../ships/entities/ship.entity';

@Injectable()
export class RessourceService implements OnApplicationBootstrap {
  constructor(
    @InjectRepository(Ressource)
    private readonly ressourcesRepository: Repository<Ressource>,

    @InjectRepository(Ship)
    private readonly shipsRepository: Repository<Ship>,
  ) {}

  async onApplicationBootstrap() {
    console.log('On application boostrap ressources !');
    const ressourcesCount = await this.ressourcesRepository.count({
      where: { ship: { user: { surname: 'André', lastname: 'Gury' } } },
    });
    if (ressourcesCount === 0) {
      const ship = await this.shipsRepository.findOne({
        where: { user: { surname: 'André', lastname: 'Gury' } },
      });
      console.log(ship);
      if (ship) {
        await this.ressourcesRepository.save([
          {
            type: 'Water',
            max_capacity: 300,
            actual_capacity: 300,
            ship: ship,
          },
          {
            type: 'Electricity',
            max_capacity: 500,
            actual_capacity: 500,
            ship: ship,
          },
        ]);
        console.log(
          'Database seeded with initial ressources for ship related to user André Gury',
        );
      } else {
        console.log(
          'Database not seeded with initial ressources for ship related to user André Gury',
        );
      }
    }
    const ressources = await this.ressourcesRepository.find();
    for (const ressource of ressources) {
      await this.ressourcesRepository.update(ressource.id, {
        actual_capacity: ressource.max_capacity,
      });
      console.log('Ressource actual capacity updated to max capacity.');
    }
  }

  async create(createRessourceDto: CreateRessourceDto): Promise<Ressource> {
    const ship = await this.shipsRepository.findOne({
      where: { id: createRessourceDto.shipId },
    });
    if (!ship) {
      throw new Error('ship not found');
    }

    const ressource = new Ressource();
    ressource.type = createRessourceDto.type;
    ressource.max_capacity = createRessourceDto.max_capacity;
    ressource.actual_capacity = createRessourceDto.actual_capacity;
    ressource.ship = ship;

    return await this.ressourcesRepository.save(ressource);
  }

  async findAll(): Promise<Ressource[]> {
    return this.ressourcesRepository.find();
  }

  findOneId(id: number): Promise<Ressource | null> {
    return this.ressourcesRepository.findOneBy({ id: id });
  }

  async remove(id: string): Promise<void> {
    await this.ressourcesRepository.delete(id);
  }

  async update(id: number, ressource: CreateRessourceDto) {
    await this.ressourcesRepository.update(id, ressource);
  }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRessourceDto } from './dto/create-ressource.dto';
import { Ressource } from './entities/ressource.entity';
import { Ship } from '../ships/entities/ship.entity';

@Injectable()
export class RessourceService {
  constructor(
    @InjectRepository(Ressource)
    private readonly ressourcesRepository: Repository<Ressource>,

    @InjectRepository(Ship)
    private readonly shipsRepository: Repository<Ship>,
  ) {}
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

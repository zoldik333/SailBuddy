import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUsageDto } from './dto/create-usage.dto';
import { Usage } from './entities/usage.entity';
import { Ressource } from '../ressources/entities/ressource.entity';
import { subDays } from 'date-fns';
import { Ship } from '../ships/entities/ship.entity';

@Injectable()
export class UsageService implements OnApplicationBootstrap {
  constructor(
    @InjectRepository(Usage)
    private readonly usageRepository: Repository<Usage>,

    @InjectRepository(Ressource)
    private readonly ressourceRepository: Repository<Ressource>,
  ) {}

  async onApplicationBootstrap() {
    console.log('On application boostrap usage !');
    await this.usageRepository.clear();
    const ressources = await this.ressourceRepository.find({
      where: { ship: { user: { surname: 'André', lastname: 'Gury' } } },
    });
    for (const ressource of ressources) {
      for (let i = 0; i < 365; i++) {
        const usage = new Usage();
        usage.date = subDays(new Date(), 365 - i);
        usage.capacity_start = ressource.max_capacity;
        usage.capacity_end = Math.round(
          ressource.max_capacity - Math.random() * 100,
        );
        usage.ressource = ressource;
        await this.usageRepository.save(usage);
      }
      console.log(
        'Database seeded with initial usage for ressource related to water & electricity for 1 year.',
      );
    }
  }

  async create(createUsageDto: CreateUsageDto): Promise<Usage> {
    const ressource = await this.ressourceRepository.findOne({
      where: { id: createUsageDto.ressourceId },
    });
    if (!ressource) {
      throw new Error('Ressource not found');
    }

    const usage = new Usage();
    usage.date = createUsageDto.date;
    usage.capacity_start = createUsageDto.capacity_start;
    usage.capacity_end = createUsageDto.capacity_end;
    usage.ressource = ressource;

    return await this.usageRepository.save(usage);
  }

  async findAll(): Promise<Usage[]> {
    return this.usageRepository.find();
  }

  findOneId(id: number): Promise<Usage | null> {
    return this.usageRepository.findOneBy({ id: id });
  }

  async remove(id: string): Promise<void> {
    await this.usageRepository.delete(id);
  }

  async update(id: number, usage: CreateUsageDto) {
    await this.usageRepository.update(id, usage);
  }

  async getUsagesByShip(ship: Ship): Promise<Usage[]> {
    return await this.usageRepository.find({
      where: { ressource: { ship: ship } },
    });
  }
}

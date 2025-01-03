import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUsageDto } from './dto/create-usage.dto';
import { Usage } from './entities/usage.entity';
import { Ressource } from '../ressources/entities/ressource.entity';
import { subDays } from 'date-fns';

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
      where: { ship: { user: { lastname: 'Ramet', surname: 'Amelie' } } },
    });
    for (const ressource of ressources) {
      await this.usageRepository.save([
        {
          date: new Date(),
          capacity_consumed: 50,
          ressource: ressource,
        },
        {
          date: subDays(new Date(), 1),
          capacity_consumed: 25,
          ressource: ressource,
        },
        {
          date: subDays(new Date(), 2),
          capacity_consumed: 10,
          ressource: ressource,
        },
      ]);
      console.log(
        'Database seeded with initial usage for ressource related to water',
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
    usage.capacity_consumed = createUsageDto.capacity_consumed;
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
}

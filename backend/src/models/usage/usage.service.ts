import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUsageDto } from './dto/create-usage.dto';
import { Usage } from './entities/usage.entity';
import { Ressource } from '../ressources/entities/ressource.entity';

@Injectable()
export class UsageService {
  constructor(
    @InjectRepository(Usage)
    private readonly usageRepository: Repository<Usage>,

    @InjectRepository(Ressource)
    private readonly ressourceRepository: Repository<Ressource>,
  ) {}

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

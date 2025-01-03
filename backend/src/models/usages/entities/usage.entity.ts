import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Ressource } from '../../ressources/entities/ressource.entity';

@Entity()
export class Usage {
  @ApiProperty({ example: 1, description: 'The id of the usage for a day' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: '28/11/2024', description: 'The date of the usage' })
  @Column({ type: 'timestamp' })
  date: Date;

  @ApiProperty({
    example: '160',
    description: 'The capacity at the start of the day',
  })
  @Column()
  capacity_start: number;

  @ApiProperty({
    example: '145',
    description: 'The capacity at the start of the day',
  })
  @Column()
  capacity_end: number;

  @ManyToOne(() => Ressource, (ressource) => ressource.usages, { eager: true })
  ressource: Ressource;
}

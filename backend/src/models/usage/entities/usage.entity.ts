import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
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
    example: '100',
    description: 'The capacity consumed on a day',
  })
  @Column()
  capacity_consumed: bigint;

  @OneToOne(() => Ressource, (ressource) => ressource.id)
  ressource: Ressource;
}

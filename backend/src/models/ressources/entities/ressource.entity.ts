import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Ship } from '../../ships/entities/ship.entity';

@Entity()
export class Ressource {
  @ApiProperty({ example: 1, description: 'The id of ship ressource' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    example: 'Electricity',
    description: 'The type of the ressource',
  })
  @Column()
  type: string;

  @ApiProperty({
    example: '300',
    description: 'The maximum capacity of the ressource',
  })
  @Column()
  max_capacity: number;

  @ApiProperty({
    example: '200',
    description: 'The actual capacity of the ressource',
  })
  @Column()
  actual_capacity: number;

  @ManyToOne(() => Ship, (ship) => ship.id)
  ship: Ship;
}

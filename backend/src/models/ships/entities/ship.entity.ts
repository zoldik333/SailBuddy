import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { User } from '../../users/entities/user.entity';

@Entity()
export class Ship {
  @ApiProperty({ example: 1, description: 'The id of the ship' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'Pélican II', description: 'The name of the ship' })
  @Column()
  name: string;

  @ApiProperty({
    example: 'true',
    description: 'Is the ship set up and ready to be tracked',
  })
  @Column()
  equipped: boolean;

  @ApiProperty({
    example: 'true',
    description: 'Does the ship is tracked',
  })
  @Column()
  tracked: boolean;

  @OneToOne(() => User, (user) => user.id, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'user_id' })
  user: User;
}

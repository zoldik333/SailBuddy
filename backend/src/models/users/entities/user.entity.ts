import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class User {
  @ApiProperty({ example: 1, description: 'The id of the user' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'André', description: 'The surname of the user' })
  @Column()
  surname: string;

  @ApiProperty({ example: 'Gury', description: 'The lastname of the user' })
  @Column()
  lastname: string;

  @ApiProperty({
    example: 'andre.gry@gmail.com',
    description: 'The email of the user',
  })
  @Column({ unique: true })
  email: string;

  @ApiProperty({
    example: 'fr',
    description: 'The preferred language of the user',
  })
  @Column({ default: 'fr' })
  language: string;

  @ApiProperty({
    example: '06 07 08 09 10',
    description: 'The phone number of the user',
  })
  phone: string;

  @ApiProperty({
    example: 's3cr3t_p4$$w0rd',
    description: 'The password of the user',
  })
  password: string;
}

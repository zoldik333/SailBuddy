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
  @Column({})
  phone: string;

  @ApiProperty({
    example: 's3cr3t_p4$$w0rd',
    description: 'The password of the user',
  })
  @Column()
  password: string;

  @ApiProperty({
    example: 'buffer',
    description: 'The picture of the user',
  })
  @Column({ type: 'bytea', nullable: true })
  picture: Buffer | null;

  @ApiProperty({
    example: 'Champs Elysées',
    description: 'The street of the user',
  })
  @Column()
  street: string;

  @ApiProperty({
    example: '42',
    description: 'The street number of the user',
  })
  @Column()
  street_number: string;

  @ApiProperty({
    example: 'Paris',
    description: 'The city of the user',
  })
  @Column()
  city: string;

  @ApiProperty({
    example: '75008',
    description: 'The ZIP code of the user',
  })
  @Column()
  zip: string;

  @ApiProperty({
    example: 'France',
    description: 'The country of the user',
  })
  @Column()
  country: string;
}

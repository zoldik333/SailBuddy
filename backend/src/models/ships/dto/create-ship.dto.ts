import { ApiProperty } from '@nestjs/swagger';

export class CreateShipDto {
  @ApiProperty({ example: 'Poséïdon', description: 'The name of the ship' })
  name: string;

  @ApiProperty({
    example: true,
    description: 'Is the ship equipped',
  })
  equipped: boolean;

  @ApiProperty({
    example: true,
    description: 'Is the ship tracked',
  })
  tracked: boolean;

  @ApiProperty({ example: {}, description: 'The user id of the ship owner' })
  userId: number;

  @ApiProperty({
    example: 300,
    description: 'The water max capacity of the ship',
  })
  water_max_capacity: number;

  @ApiProperty({
    example: 300,
    description: 'The electricity max capacity of the ship',
  })
  electricity_max_capacity: number;
}

export class ShipDto {
  @ApiProperty({ example: 'Poséïdon', description: 'The name of the ship' })
  name: string;

  @ApiProperty({
    example: true,
    description: 'Is the ship equipped',
  })
  equipped: boolean;

  @ApiProperty({
    example: true,
    description: 'Is the ship tracked',
  })
  tracked: boolean;

  @ApiProperty({
    example: 300,
    description: 'The water max capacity of the ship',
  })
  water_max_capacity: number;

  @ApiProperty({
    example: 300,
    description: 'The electricity max capacity of the ship',
  })
  electricity_max_capacity: number;
}

export class Ship {
  @ApiProperty({ example: 1, description: 'The id of the ship' })
  id: number;

  @ApiProperty({ example: 'Poséïdon', description: 'The name of the ship' })
  name: string;

  @ApiProperty({
    example: true,
    description: 'Is the ship equipped',
  })
  equipped: boolean;

  @ApiProperty({
    example: true,
    description: 'Is the ship tracked',
  })
  tracked: boolean;

  @ApiProperty({ example: {}, description: 'The user id of the ship owner' })
  userId: number;
}

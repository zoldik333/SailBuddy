import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({
    example: 'andre.gry@gmail.com',
    description: 'The email or phone of the user',
  })
  login: string;

  @ApiProperty({ example: 'password', description: 'The password of the user' })
  password: string;
}

export class RegisterDto {
  @ApiProperty({
    example: 'andre.gry@gmail.com',
    description: 'The email of the user',
  })
  email: string;

  @ApiProperty({ example: 'password', description: 'The password of the user' })
  password: string;

  @ApiProperty({ example: 'André', description: 'The surname of the user' })
  surname: string;

  @ApiProperty({ example: 'Gury', description: 'The lastname of the user' })
  lastname: string;

  @ApiProperty({
    example: '06 07 08 09 10',
    description: 'The phone number of the user',
  })
  phone: string;

  @ApiProperty({ example: 'fr', description: 'The language of the user' })
  language: string;

  @ApiProperty({ description: 'The picture of the user' })
  picture: string;

  @ApiProperty({ example: 'Chemin du Littoral', description: 'The street of the user' })
  street: string;

  @ApiProperty({ example: '13', description: 'The street number of the user' })
  street_number: string;

  @ApiProperty({ example: 'Marseille', description: 'The city of the user' })
  city: string;

  @ApiProperty({ example: '13015', description: 'The zip code of the user' })
  zip: string;

  @ApiProperty({ example: 'France', description: 'The country of the user' })
  country: string;
}

export class Token {
  @ApiProperty({ description: 'The connexion token' })
  access_token: string;
}

import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService implements OnApplicationBootstrap {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  async onApplicationBootstrap() {
    console.log('On application boostrap users !');
    const userCount = await this.usersRepository.count();
    if (userCount === 0) {
      await this.usersRepository.save([
        {
          surname: 'Amelie',
          lastname: 'Ramet',
          email: 'amelie.ramet.ar@gmail.com',
          language: 'fr',
          phone: '06 07 08 09 10',
          password:
            '$argon2id$v=19$m=65536,t=3,p=4$/dgR98PwmASMmT8xk31ksg$vknRngM6pd0QyAjpuIzghuL8fljbh6bfbIbfjTLroFQ', // Hashed password for: 'amelie'
          picture: null,
        },
      ]);
      console.log('Database seeded with initial user Amelie Ramet');
    }
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const user = new User();
    const buffer = Buffer.from(createUserDto.picture, 'base64');

    user.surname = createUserDto.surname;
    user.lastname = createUserDto.lastname;
    user.email = createUserDto.email;
    user.password = createUserDto.password;
    user.phone = createUserDto.phone;
    user.language = createUserDto.language;
    user.picture = buffer;
    return await this.usersRepository.save(user);
  }

  async findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOneId(id: number): Promise<User | null> {
    return this.usersRepository.findOneBy({ id: id });
  }

  async findOneEmail(email: string): Promise<User | null> {
    return await this.usersRepository.findOneBy({ email: email });
  }

  async findOneEmailOrPhone(login: string): Promise<User | null> {
    const user = await this.usersRepository.findOneBy({ email: login });
    if (user) {
      return user;
    }
    return await this.usersRepository.findOneBy({ phone: login });
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }

  async update(id: number, user: CreateUserDto) {
    const buffer = Buffer.from(user.picture, 'base64');

    await this.usersRepository.update(id, { ...user, picture: buffer });
  }
}

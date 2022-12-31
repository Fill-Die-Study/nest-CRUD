import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './User.entity';

@Injectable()
export class UserRepository extends Repository<User> {
  // async createUser(createUserDto: CreateUserDto): Promise<User> {
  //   const { title, description } = createUserDto;
  //   const User = this.create({
  //     title,
  //     description,
  //     status: UserStatus.PUBLIC,
  //   });
  //   await this.save(User);
  //   return User;
  // }
  // async getUserById(id: number): Promise<User> {
  //   const found = await this.findOneBy({ id });
  //   if (!found) {
  //     throw new NotFoundException(`Can't find User with id ${id}`);
  //   }
  //   return found;
  // }
}

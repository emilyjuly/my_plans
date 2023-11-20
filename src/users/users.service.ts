import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  create(createUserDto: CreateUserDto) {
    return this.prisma.users.create({
      data: createUserDto,
    });
  }

  async findAll() {
    const users = await this.prisma.users.findMany();
    users.map((u) => {
      u.createdAt.setHours(u.createdAt.getHours() - 3);
      u.updatedAt.setHours(u.updatedAt.getHours() - 3);
    });
    return users;
  }

  async findOne(id: number) {
    const user = await this.prisma.users.findUnique({
      where: { id },
    });
    user.createdAt.setHours(user.createdAt.getHours() - 3);
    user.updatedAt.setHours(user.updatedAt.getHours() - 3);
    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.prisma.users.update({
      where: { id },
      data: updateUserDto,
    });
  }

  remove(id: number) {
    return this.prisma.users.delete({
      where: {
        id,
      },
    });
  }
}

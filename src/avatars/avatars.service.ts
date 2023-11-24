import { Injectable } from '@nestjs/common';
import { CreateAvatarDto } from './dto/create-avatar.dto';
import { UpdateAvatarDto } from './dto/update-avatar.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AvatarsService {
  constructor(private prisma: PrismaService) {}

  create(createAvatarDto: CreateAvatarDto) {
    return this.prisma.avatars.create({
      data: createAvatarDto,
    });
  }

  async findOne(id: number) {
    const avatar = await this.prisma.avatars.findUnique({
      where: { id },
    });
    return avatar;
  }

  update(id: number, updateAvatarDto: UpdateAvatarDto) {
    return this.prisma.avatars.update({
      where: { id },
      data: updateAvatarDto,
    });
  }

  remove(id: number) {
    return this.prisma.avatars.delete({
      where: {
        id,
      },
    });
  }
}

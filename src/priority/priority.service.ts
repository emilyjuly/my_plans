import { Injectable } from '@nestjs/common';
import { CreatePriorityDto } from './dto/create-priority.dto';
import { UpdatePriorityDto } from './dto/update-priority.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PriorityService {
  constructor(private prisma: PrismaService) {}

  create(createPriorityDto: CreatePriorityDto) {
    return this.prisma.priority.create({
      data: createPriorityDto,
    });
  }

  findAll() {
    return this.prisma.priority.findMany();
  }

  findOne(id: number) {
    return this.prisma.priority.findUnique({
      where: { id },
    });
  }

  update(id: number, updatePriorityDto: UpdatePriorityDto) {
    return this.prisma.priority.update({
      where: { id },
      data: updatePriorityDto,
    });
  }

  remove(id: number) {
    return this.prisma.priority.delete({
      where: {
        id,
      },
    });
  }
}

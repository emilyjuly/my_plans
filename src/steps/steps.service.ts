import { Injectable } from '@nestjs/common';
import { CreateStepDto } from './dto/create-step.dto';
import { UpdateStepDto } from './dto/update-step.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class StepsService {
  constructor(private prisma: PrismaService) {}

  create(createStepDto: CreateStepDto) {
    return this.prisma.steps.create({
      data: createStepDto,
    });
  }

  findAll() {
    return this.prisma.steps.findMany();
  }

  findOne(id: number) {
    return this.prisma.steps.findUnique({
      where: { id },
    });
  }

  update(id: number, updateStepDto: UpdateStepDto) {
    return this.prisma.steps.update({
      where: { id },
      data: updateStepDto,
    });
  }

  remove(id: number) {
    return this.prisma.steps.delete({
      where: {
        id,
      },
    });
  }
}

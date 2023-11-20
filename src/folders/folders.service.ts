import { Injectable } from '@nestjs/common';
import { CreateFolderDto } from './dto/create-folder.dto';
import { UpdateFolderDto } from './dto/update-folder.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FoldersService {
  constructor(private prisma: PrismaService) {}

  create(createFolderDto: CreateFolderDto) {
    return this.prisma.folders.create({
      data: createFolderDto,
    });
  }

  findAll() {
    return this.prisma.folders.findMany();
  }

  findOne(id: number) {
    return this.prisma.folders.findUnique({
      where: { id },
    });
  }

  update(id: number, updateFolderDto: UpdateFolderDto) {
    return this.prisma.folders.update({
      where: { id },
      data: updateFolderDto,
    });
  }

  remove(id: number) {
    return this.prisma.folders.delete({
      where: {
        id,
      },
    });
  }
}

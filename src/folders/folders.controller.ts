import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FoldersService } from './folders.service';
import { CreateFolderDto } from './dto/create-folder.dto';
import { UpdateFolderDto } from './dto/update-folder.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('folders')
@ApiTags('Folders')
export class FoldersController {
  constructor(private readonly foldersService: FoldersService) {}

  @Post('create')
  create(@Body() createFolderDto: CreateFolderDto) {
    return this.foldersService.create(createFolderDto);
  }

  @Get('getAll')
  findAll() {
    return this.foldersService.findAll();
  }

  @Get('getOne/:id')
  findOne(@Param('id') id: string) {
    return this.foldersService.findOne(+id);
  }

  @Patch('update/:id')
  update(@Param('id') id: string, @Body() updateFolderDto: UpdateFolderDto) {
    return this.foldersService.update(+id, updateFolderDto);
  }

  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.foldersService.remove(+id);
  }
}

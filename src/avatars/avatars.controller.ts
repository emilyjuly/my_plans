import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AvatarsService } from './avatars.service';
import { CreateAvatarDto } from './dto/create-avatar.dto';
import { UpdateAvatarDto } from './dto/update-avatar.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('avatars')
@ApiTags('Avatars')
export class AvatarsController {
  constructor(private readonly avatarsService: AvatarsService) {}

  @Post('create')
  create(@Body() createAvatarDto: CreateAvatarDto) {
    return this.avatarsService.create(createAvatarDto);
  }

  @Get('getOne/:id')
  findOne(@Param('id') id: string) {
    return this.avatarsService.findOne(+id);
  }

  @Patch('update/:id')
  update(@Param('id') id: string, @Body() updateAvatarDto: UpdateAvatarDto) {
    return this.avatarsService.update(+id, updateAvatarDto);
  }

  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.avatarsService.remove(+id);
  }
}

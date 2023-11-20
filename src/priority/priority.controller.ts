import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PriorityService } from './priority.service';
import { CreatePriorityDto } from './dto/create-priority.dto';
import { UpdatePriorityDto } from './dto/update-priority.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('priority')
@ApiTags('Priority')
export class PriorityController {
  constructor(private readonly priorityService: PriorityService) {}

  @Post('create')
  create(@Body() createPriorityDto: CreatePriorityDto) {
    return this.priorityService.create(createPriorityDto);
  }

  @Get('getAll')
  findAll() {
    return this.priorityService.findAll();
  }

  @Get('getOne/:id')
  findOne(@Param('id') id: string) {
    return this.priorityService.findOne(+id);
  }

  @Patch('update/:id')
  update(
    @Param('id') id: string,
    @Body() updatePriorityDto: UpdatePriorityDto,
  ) {
    return this.priorityService.update(+id, updatePriorityDto);
  }

  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.priorityService.remove(+id);
  }
}

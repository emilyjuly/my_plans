import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { StepsService } from './steps.service';
import { CreateStepDto } from './dto/create-step.dto';
import { UpdateStepDto } from './dto/update-step.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('steps')
@ApiTags('Steps')
export class StepsController {
  constructor(private readonly stepsService: StepsService) {}

  @Post('create')
  create(@Body() createStepDto: CreateStepDto) {
    return this.stepsService.create(createStepDto);
  }

  @Get('getAll')
  findAll() {
    return this.stepsService.findAll();
  }

  @Get('getOne/:id')
  findOne(@Param('id') id: string) {
    return this.stepsService.findOne(+id);
  }

  @Patch('update/:id')
  update(@Param('id') id: string, @Body() updateStepDto: UpdateStepDto) {
    return this.stepsService.update(+id, updateStepDto);
  }

  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.stepsService.remove(+id);
  }
}

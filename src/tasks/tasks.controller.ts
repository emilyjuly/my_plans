import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('tasks')
@ApiTags('Tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post('create')
  create(@Body() createTaskDto: CreateTaskDto) {
    return this.tasksService.create(createTaskDto);
  }

  @Get('getAll')
  findAll() {
    return this.tasksService.findAll();
  }

  @Get('getOne/:id')
  findOne(@Param('id') id: string) {
    return this.tasksService.findOne(+id);
  }

  @Patch('update/:id')
  update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.tasksService.update(+id, updateTaskDto);
  }

  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.tasksService.remove(+id);
  }
}

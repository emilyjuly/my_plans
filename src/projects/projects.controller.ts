import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('projects')
@ApiTags('Projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Post('create')
  create(@Body() createProjectDto: CreateProjectDto) {
    return this.projectsService.create(createProjectDto);
  }

  @Get('getAll')
  findAll() {
    return this.projectsService.findAll();
  }

  @Get('getOne/:id')
  findOne(@Param('id') id: string) {
    return this.projectsService.findOne(+id);
  }

  @Patch('update/:id')
  update(@Param('id') id: string, @Body() updateProjectDto: UpdateProjectDto) {
    return this.projectsService.update(+id, updateProjectDto);
  }

  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.projectsService.remove(+id);
  }
}

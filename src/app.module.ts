import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { AvatarsModule } from './avatars/avatars.module';
import { FoldersModule } from './folders/folders.module';
import { ProjectsModule } from './projects/projects.module';
import { TasksModule } from './tasks/tasks.module';
import { PriorityModule } from './priority/priority.module';
import { StatusModule } from './status/status.module';
import { StepsModule } from './steps/steps.module';

@Module({
  imports: [PrismaModule, UsersModule, AvatarsModule, FoldersModule, ProjectsModule, TasksModule, PriorityModule, StatusModule, StepsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

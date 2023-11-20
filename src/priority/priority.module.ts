import { Module } from '@nestjs/common';
import { PriorityService } from './priority.service';
import { PriorityController } from './priority.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [PriorityController],
  providers: [PriorityService],
  imports: [PrismaModule],
})
export class PriorityModule {}

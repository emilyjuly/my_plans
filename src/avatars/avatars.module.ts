import { Module } from '@nestjs/common';
import { AvatarsService } from './avatars.service';
import { AvatarsController } from './avatars.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [AvatarsController],
  providers: [AvatarsService],
  imports: [PrismaModule],
})
export class AvatarsModule {}

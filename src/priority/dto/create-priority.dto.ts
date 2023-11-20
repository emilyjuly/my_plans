import { ApiProperty } from '@nestjs/swagger';

export class CreatePriorityDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  color: string;
}

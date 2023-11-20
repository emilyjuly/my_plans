import { ApiProperty } from '@nestjs/swagger';

export class CreateStepDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  status_id: number;

  @ApiProperty()
  task_id: number;
}

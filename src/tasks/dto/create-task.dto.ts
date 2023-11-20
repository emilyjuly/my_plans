import { ApiProperty } from '@nestjs/swagger';

export class CreateTaskDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  project_id?: number;

  @ApiProperty()
  duration: string;

  @ApiProperty()
  status_id: number;

  @ApiProperty()
  description?: string;

  @ApiProperty()
  priority_id: number;
}

import { ApiProperty } from '@nestjs/swagger';

export class CreateProjectDto {
  @ApiProperty()
  folder_id?: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  color: string;
}

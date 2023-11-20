import { ApiProperty } from '@nestjs/swagger';

export class CreateFolderDto {
  @ApiProperty()
  user_id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  color: string;
}

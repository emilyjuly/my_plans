import { ApiProperty } from '@nestjs/swagger';

export class CreateAvatarDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  style: string;
}

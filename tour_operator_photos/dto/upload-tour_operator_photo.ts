import { ApiProperty } from '@nestjs/swagger';
import { IsNumberString } from 'class-validator';

export class UploadTourOperatorPhotoDto {
  @ApiProperty()
  @IsNumberString()
  tourOperatorId: number;
}

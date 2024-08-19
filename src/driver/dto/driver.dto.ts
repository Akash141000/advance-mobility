import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  Length,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class DriverDTO {
  @IsString({ message: 'Driver name can contain only characters' })
  @MinLength(3, {
    message: 'Driver name should be at least 3 characters long',
  })
  @MaxLength(30, { message: 'Driver name can be at most 10 characters long' })
  @ApiProperty({ default: 'NewDriver', required: true })
  name: string;

  @Length(10, 10, { message: 'phone number should be exactly 10 digits' })
  @ApiProperty({ default: 1234567890, required: true })
  @Matches(/^\d+$/, { message: 'Phone number can only contain digits' })
  phoneNumber: string;

  @ApiProperty({ default: '' })
  profilePhoto: string;
}

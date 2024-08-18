import { ApiProperty } from '@nestjs/swagger';
import {
  IsInt,
  IsString,
  Max,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';

export class DriverDTO {
  @IsString({ message: 'Driver name can contain only characters' })
  @MinLength(3, {
    message: 'Driver name should be at least 3 characters long',
  })
  @MaxLength(10, { message: 'Driver name can be at most 10 characters long' })
  @ApiProperty({ default: 'NewDriver', required: true })
  name: string;

  @IsInt({ message: 'phone number can contain only number' })
  @Min(10, { message: 'phone number should be min 10 number' })
  @Max(10, { message: 'phone number can be max 10 number' })
  @ApiProperty({ default: 123456789, required: true })
  phoneNumber: number;

  @ApiProperty({ default: '' })
  profilePhoto: string;
}

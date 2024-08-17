import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString, Length, Max, Min } from 'class-validator';

export class DriverDTO {
  @IsString({ message: 'name can contain only alphabets' })
  @Length(4)
  @ApiProperty({ default: 'NewDriver' })
  name: string;

  @IsInt({ message: 'phone number can contain only number' })
  @Min(10, { message: 'phone number should be min 10 number' })
  @Max(10, { message: 'phone number can be max 10 number' })
  @ApiProperty({ default: 123456789 })
  phoneNumber: number;

  @ApiProperty({ default: '' })
  profilePhoto: string;
}

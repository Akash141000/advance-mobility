import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString, Length, Max, Min } from 'class-validator';

export class VehicleDTO {
  //can use custom validator here,
  @IsString({ message: 'vehicle number can contain only alphabets' })
  @Length(4)
  @ApiProperty({ default: 'MH431234' })
  vehicleNumber: string;

  @IsInt({ message: 'phone number can contain only number' })
  @Min(10, { message: 'phone number should be min 10 number' })
  @Max(10, { message: 'phone number can be max 10 number' })
  @ApiProperty({ default: 'car' })
  vechicleType: number;

  @ApiProperty({ default: '' })
  pucCertificate: string;

  @ApiProperty({ default: '' })
  insuranceCertificate: string;
}

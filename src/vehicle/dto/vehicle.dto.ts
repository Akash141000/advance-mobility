import { ApiProperty } from '@nestjs/swagger';
import {
  IsEnum,
  IsString,
  Matches,
  Max,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';

export enum VehicleType {
  CAR = 'car',
  BIKE = 'bike',
  TRUCK = 'truck',
  VAN = 'van',
}

export class VehicleDTO {
  @Matches(/^[A-Z]{2}\d{4}$/, {
    message:
      'Vehicle number must be in the format of two uppercase letters followed by four digits.',
  })
  @ApiProperty({ default: 'MH4311', required: true })
  vehicleNumber: string;

  @IsString({ message: 'Vehicle type can contain only characters' })
  @MinLength(3, {
    message: 'Vehicle type should be at least 3 characters long',
  })
  @MaxLength(10, { message: 'Vehicle type can be at most 10 characters long' })
  @IsEnum(VehicleType, {
    message: 'Vehicle type must be one of the predefined types.',
  })
  @ApiProperty({
    example: 'car',
    description: 'Type of the vehicle.',
    enum: VehicleType,
    required: true,
  })
  vehicleType: VehicleType;

  @ApiProperty({ default: 'puc' })
  pucCertificate: string;

  @ApiProperty({ default: 'insurance' })
  insuranceCertificate: string;
}

import { ApiProperty } from '@nestjs/swagger';
import { IsInt, Max, Min } from 'class-validator';

export class TransferDTO {
  @IsInt({ message: 'vehicle id can contain only number' })
  @Min(1, { message: 'vehicle should be min 1 number' })
  @Max(5, { message: 'vehicle can be max 5 number' })
  @ApiProperty({ default: 1, required: true })
  vehicleId: number;

  @IsInt({ message: 'driver id can contain only number' })
  @Min(1, { message: 'driver should be min 1 number' })
  @Max(5, { message: 'driver can be max 5 number' })
  @ApiProperty({ default: 1, required: true })
  driverId: number;
}

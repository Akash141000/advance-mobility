import { Injectable } from '@nestjs/common';

@Injectable()
export class VehicleService {
  getVehicle(): string {
    return 'Vehicle';
  }
}

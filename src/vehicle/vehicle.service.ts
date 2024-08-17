import { Injectable } from '@nestjs/common';
import { VehicleModel } from './vehicle.model';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { VehicleDTO } from './dto/vehicle.dto';

@Injectable()
export class VehicleService {
  constructor(
    @InjectRepository(VehicleModel)
    private VehicleRepo: Repository<VehicleModel>,
  ) {}

  async getVehicle(id: number) {
    const vehicle = await this.VehicleRepo.findOneBy({ id: id });
    return vehicle;
  }

  async addVehicle(vehicleData: VehicleDTO) {
    const vehicle = await this.VehicleRepo.save(vehicleData);
    return vehicle;
  }
}

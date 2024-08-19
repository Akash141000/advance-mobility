import { Injectable, NotFoundException } from '@nestjs/common';
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

  async getVehicles() {
    const vehicles = await this.VehicleRepo.find({ take: 10 });
    return vehicles;
  }

  async getVehicle(vehicleId: number) {
    const vehicle = await this.VehicleRepo.findOne({
      where: { vehicleId },
      relations: ['transfers'],
    });
    if (!vehicle) {
      return new NotFoundException('no vehicle found');
    }
    return vehicle;
  }

  async addVehicle(vehicleData: VehicleDTO) {
    const vehicle = await this.VehicleRepo.save(vehicleData);
    return vehicle;
  }
}

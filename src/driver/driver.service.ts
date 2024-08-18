import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DriverModel } from './driver.model';
import { Repository } from 'typeorm';
import { DriverDTO } from './dto/driver.dto';

@Injectable()
export class DriverService {
  constructor(
    @InjectRepository(DriverModel) private DriverRepo: Repository<DriverModel>,
  ) {}

  async getDrivers() {
    return this.DriverRepo.find({ take: 10 });
  }

  async getDriver(driverId: number) {
    return this.DriverRepo.findOneBy({ driverId });
  }

  async addDriver(driverData: DriverDTO) {
    try {
      const driver = await this.DriverRepo.save(driverData);
      return driver;
    } catch (err) {
      return err;
    }
  }
}

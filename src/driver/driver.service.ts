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

  async getDriver(id: number) {
    return this.DriverRepo.findOneBy({ id: id });
  }

  async addDriver(driverData: DriverDTO) {
    try {
      const driver = await this.DriverRepo.insert(driverData);
      return driver;
    } catch (err) {
      return err;
    }
  }
}

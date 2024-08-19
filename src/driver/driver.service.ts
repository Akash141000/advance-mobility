import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DriverModel } from './driver.model';
import { Repository } from 'typeorm';
import { DriverDTO } from './dto/driver.dto';
import { TransferModel } from 'src/transfer/transfer.model';

@Injectable()
export class DriverService {
  constructor(
    @InjectRepository(DriverModel) private DriverRepo: Repository<DriverModel>,
    @InjectRepository(TransferModel)
    private TransferRepo: Repository<TransferModel>,
  ) {}

  async getDrivers() {
    return this.DriverRepo.find({ take: 10 });
  }

  async getDriver(driverId: number) {
    const driverWithTransfers = await this.DriverRepo.createQueryBuilder(
      'driver',
    )
      .where('driver.driverId = :driverId', { driverId })
      .leftJoinAndSelect('driver.transfers', 'transfer')
      .getOne();

    return driverWithTransfers;
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

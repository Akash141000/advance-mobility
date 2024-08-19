import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TransferModel } from './transfer.model';
import { TransferDTO } from './dto/transfer.dto';

@Injectable()
export class TransferService {
  constructor(
    @InjectRepository(TransferModel)
    private TransferRepo: Repository<TransferModel>,
  ) {}

  async getTransfers() {
    return this.TransferRepo.find({
      take: 10,
      relations: ['vehicleId', 'driverId'],
    });
  }

  //error handling not implemented yet
  async getTransfer(transferId: number) {
    return this.TransferRepo.findOne({
      where: { id: transferId },
      relations: ['vehicleId', 'driverId'],
    });
  }

  async createTransfer(transferData: TransferDTO) {
    try {
      const driver = await this.TransferRepo.save(transferData);
      return driver;
    } catch (err) {
      return err;
    }
  }
}

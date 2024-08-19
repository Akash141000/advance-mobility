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
      relations: ['vehicle_id', 'driver_id'],
    });
  }

  async getTransfer(transferId: number) {
    return this.TransferRepo.findOne({
      where: { id: transferId },
      relations: ['vehicle_id', 'driver_id'],
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

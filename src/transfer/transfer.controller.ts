import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { TransferService } from './transfer.service';
import { TransferDTO } from './dto/transfer.dto';

@Controller('/transfer')
export class TransferController {
  constructor(private readonly transferServie: TransferService) {}

  @ApiResponse({
    status: 200,
    description: 'get all transfers ',
    type: Array<TransferDTO>,
  })
  @Get('/get')
  getTransfers() {
    return this.transferServie.getTransfers();
  }

  @ApiResponse({
    status: 200,
    description: 'get transfer information using id',
    type: TransferDTO,
  })
  @Get('/get/:transferId')
  getTransfer(@Query('id') id: number) {
    return this.transferServie.getTransfer(id);
  }

  @ApiResponse({
    status: 200,
    description: 'create new transfer',
    type: TransferDTO,
  })
  @Post('/create')
  createTransfer(@Body() body: TransferDTO) {
    return this.transferServie.createTransfer(body);
  }
}

import {
  Body,
  Controller,
  Get,
  InternalServerErrorException,
  Post,
  Query,
} from '@nestjs/common';
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
    try {
      return this.transferServie.getTransfers();
    } catch (error) {
      console.log('transfer', '/get', error);
      return new InternalServerErrorException('something went wrong');
    }
  }

  @ApiResponse({
    status: 200,
    description: 'get transfer information using id',
    type: TransferDTO,
  })
  @Get('/get/:transferId')
  getTransfer(@Query('id') id: number) {
    try {
      return this.transferServie.getTransfer(id);
    } catch (error) {
      console.log('driver', '/get/:transferId', error);
      return new InternalServerErrorException('something went wrong');
    }
  }

  @ApiResponse({
    status: 200,
    description: 'create new transfer',
    type: TransferDTO,
  })
  @Post('/create')
  createTransfer(@Body() body: TransferDTO) {
    try {
      return this.transferServie.createTransfer(body);
    } catch (error) {
      console.log('driver', '/create', error);
      return new InternalServerErrorException('something went wrong');
    }
  }
}

import {
  Body,
  Controller,
  Get,
  InternalServerErrorException,
  Post,
  Query,
} from '@nestjs/common';
import { DriverService } from './driver.service';
import { DriverDTO } from './dto/driver.dto';
import { ApiResponse } from '@nestjs/swagger';

@Controller('/driver')
export class DriverController {
  constructor(private readonly driverService: DriverService) {}

  @ApiResponse({
    status: 200,
    description: 'get all drivers',
    type: Array<DriverDTO>,
  })
  @Get('/get')
  getDrivers() {
    try {
      return this.driverService.getDrivers();
    } catch (error) {
      console.log('driver', '/get', error);
      return new InternalServerErrorException('something went wrong');
    }
  }

  @ApiResponse({
    status: 200,
    description: 'get driver information using id',
    type: DriverDTO,
  })
  @Get('/get/:id')
  getDriver(@Query('id') id: number) {
    try {
      return this.driverService.getDriver(id);
    } catch (error) {
      console.log('driver', '/get/:id', error);
      return new InternalServerErrorException('something went wrong');
    }
  }

  @ApiResponse({
    status: 200,
    description: 'add new driver',
    type: DriverDTO,
  })
  @Post('/add')
  addDriver(@Body() body: DriverDTO) {
    try {
      return this.driverService.addDriver(body);
    } catch (error) {
      console.log('driver', '/add', error);
      return new InternalServerErrorException('something went wrong');
    }
  }
}

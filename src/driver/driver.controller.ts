import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { DriverService } from './driver.service';
import { DriverDTO } from './dto/driver.dto';
import { ApiResponse } from '@nestjs/swagger';
import { DriverModel } from './driver.model';

@Controller('/driver')
export class DriverController {
  constructor(private readonly driverServie: DriverService) {}

  @ApiResponse({
    status: 200,
    description: 'get driver information using id',
    type: DriverDTO,
  })
  @Get('/get/:id')
  getDriver(@Query('id') id: number) {
    return this.driverServie.getDriver(id);
  }

  @ApiResponse({
    status: 200,
    description: 'add new driver',
    type: DriverDTO,
  })
  @Post('/add')
  addDriver(@Body() body: DriverDTO) {
    return this.driverServie.addDriver(body);
  }
}

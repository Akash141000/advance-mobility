import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { DriverService } from './driver.service';
import { DriverDTO } from './dto/driver.dto';
import { ApiResponse } from '@nestjs/swagger';
import { DriverModel } from './driver.model';

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
    return this.driverService.getDrivers();
  }

  @ApiResponse({
    status: 200,
    description: 'get driver information using id',
    type: DriverDTO,
  })
  @Get('/get/:id')
  getDriver(@Query('id') id: number) {
    return this.driverService.getDriver(id);
  }

  @ApiResponse({
    status: 200,
    description: 'add new driver',
    type: DriverDTO,
  })
  @Post('/add')
  addDriver(@Body() body: DriverDTO) {
    return this.driverService.addDriver(body);
  }
}

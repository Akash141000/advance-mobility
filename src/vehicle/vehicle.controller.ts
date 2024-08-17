import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { VehicleService } from './vehicle.service';
import { VehicleDTO } from './dto/vehicle.dto';
import { ApiResponse } from '@nestjs/swagger';

@Controller('vehicle')
export class VehicleController {
  constructor(private readonly vehicleService: VehicleService) {}

  @ApiResponse({
    status: 200,
    description: 'get vehicle information using id',
    type: VehicleDTO,
  })
  @Get('/get/:id')
  getVehicle(@Query('id') id: number) {
    return this.vehicleService.getVehicle(id);
  }

  @ApiResponse({
    status: 200,
    description: 'add new vehicle',
    type: VehicleDTO,
  })
  @Post('/add')
  addVehicle(@Body() body: VehicleDTO) {
    return this.vehicleService.addVehicle(body);
  }
}

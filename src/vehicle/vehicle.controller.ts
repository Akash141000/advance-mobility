import {
  Body,
  Controller,
  Get,
  InternalServerErrorException,
  Post,
  Query,
} from '@nestjs/common';
import { VehicleService } from './vehicle.service';
import { VehicleDTO } from './dto/vehicle.dto';
import { ApiResponse } from '@nestjs/swagger';

@Controller('vehicle')
export class VehicleController {
  constructor(private readonly vehicleService: VehicleService) {}

  @ApiResponse({
    status: 200,
    description: 'get all vehicles',
    type: Array<VehicleDTO>,
  })
  @Get('/get')
  getVehicles() {
    try {
      return this.vehicleService.getVehicles();
    } catch (error) {
      console.log('driver', '/get', error);
      return new InternalServerErrorException('something went wrong');
    }
  }

  @ApiResponse({
    status: 200,
    description: 'get vehicle information using id',
    type: VehicleDTO,
  })
  @Get('/get/:id')
  getVehicle(@Query('id') id: number) {
    try {
      return this.vehicleService.getVehicle(id);
    } catch (error) {
      console.log('driver', '/get/:id', error);
      return new InternalServerErrorException('something went wrong');
    }
  }

  @ApiResponse({
    status: 200,
    description: 'add new vehicle',
    type: VehicleDTO,
  })
  @Post('/add')
  addVehicle(@Body() body: VehicleDTO) {
    try {
      return this.vehicleService.addVehicle(body);
    } catch (error) {
      console.log('driver', '/add', error);
      return new InternalServerErrorException('something went wrong');
    }
  }
}

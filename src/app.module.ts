import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DriverController } from './driver/driver.controller';
import { VehicleController } from './vehicle/vehicle.controller';
import { DriverService } from './driver/driver.service';
import { VehicleService } from './vehicle/vehicle.service';

@Module({
  imports: [],
  controllers: [AppController, DriverController, VehicleController],
  providers: [AppService, DriverService, VehicleService],
})
export class AppModule {}

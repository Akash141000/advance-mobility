import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DriverController } from './driver/driver.controller';
import { VehicleController } from './vehicle/vehicle.controller';
import { DriverService } from './driver/driver.service';
import { VehicleService } from './vehicle/vehicle.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DriverModel } from './driver/driver.model';
import { VehicleModel } from './vehicle/vehicle.model';
import { TransferModel } from './transfer/transfer.model';
import { TransferController } from './transfer/transfer.controller';
import { TransferService } from './transfer/transfer.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'akash',
      password: 'postgres',
      database: 'advance-mobility',
      synchronize: true, // run only first time else it will messup
      entities: [DriverModel, VehicleModel, TransferModel],
    }),
    TypeOrmModule.forFeature([DriverModel, VehicleModel, TransferModel]),
  ],
  controllers: [
    AppController,
    DriverController,
    VehicleController,
    TransferController,
  ],
  providers: [AppService, DriverService, VehicleService, TransferService],
})
export class AppModule {}

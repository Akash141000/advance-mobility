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

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'akash',
      password: 'postgres',
      database: 'advance-mobility',
      synchronize: false,
      autoLoadEntities: true,
      entities: [DriverModel, VehicleModel],
    }),
  ],
  controllers: [AppController, DriverController, VehicleController],
  providers: [AppService, DriverService, VehicleService],
})
export class AppModule {}

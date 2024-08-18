import { DriverModel } from 'src/driver/driver.model';
import { VehicleModel } from 'src/vehicle/vehicle.model';
import {
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('transfer')
export class TransferModel {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => VehicleModel, (vehicle) => vehicle.vehicleId)
  @JoinColumn({ name: 'vehicle_id' })
  vehicleId: number;

  @ManyToOne(() => DriverModel, (driver) => driver.driverId)
  @JoinColumn({ name: 'driver_id' })
  driverId: number;

  @CreateDateColumn()
  createdAt: Date;
}

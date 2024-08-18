import { TransferModel } from 'src/transfer/transfer.model';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('driver')
export class DriverModel {
  @PrimaryGeneratedColumn({ name: 'driver_id' })
  driverId: number;

  @Column()
  name: string;

  @Column({ unique: true })
  phoneNumber: number;

  @Column()
  profilePhoto: string;

  //foregin key setup
  @OneToMany(() => TransferModel, (transfer) => transfer.driverId)
  transfers: TransferModel[];
}

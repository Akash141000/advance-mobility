import { TransferModel } from 'src/transfer/transfer.model';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('driver')
export class DriverModel {
  @PrimaryGeneratedColumn({ name: 'driver_id' })
  driverId: number;

  @Column()
  name: string;

  @Column({ unique: true, name: 'phone_number' })
  phoneNumber: number;

  @Column({ name: 'profile_photo' })
  profilePhoto: string;

  //foregin key setup
  @OneToMany(() => TransferModel, (transfer) => transfer.driverId)
  transfers: TransferModel[];
}

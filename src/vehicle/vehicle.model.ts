import { TransferModel } from 'src/transfer/transfer.model';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('vehicle')
export class VehicleModel {
  @PrimaryGeneratedColumn({ name: 'vehicle_id' })
  vehicleId: number;

  @Column({ unique: true })
  vehicleNumber: string;

  @Column()
  vehicleType: string;

  @Column()
  pucCertificate: string;

  @Column()
  insuranceCertificate: string;

  //foregin key setup
  @OneToMany(() => TransferModel, (transfer) => transfer.vehicleId)
  transfers: TransferModel[];
}

import { TransferModel } from 'src/transfer/transfer.model';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

//combined index can be added for better querying
@Entity('vehicle')
export class VehicleModel {
  @PrimaryGeneratedColumn({ name: 'vehicle_id' })
  vehicleId: number;

  @Column({ unique: true, name: 'vehicle_number' })
  vehicleNumber: string;

  @Column({ name: 'vehicle_type' })
  vehicleType: string;

  @Column({ name: 'puc_certificate' })
  pucCertificate: string;

  @Column({ name: 'insurance_certificate' })
  insuranceCertificate: string;

  //foregin key setup
  @OneToMany(() => TransferModel, (transfer) => transfer.vehicleId)
  transfers: TransferModel[];
}

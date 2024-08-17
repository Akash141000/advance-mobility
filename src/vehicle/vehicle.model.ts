import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('vehicle')
export class VehicleModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  vehicleNumber: string;

  @Column()
  vehicleType: number;

  @Column()
  pucCertificate: string;

  @Column()
  insuranceCertificate: string;
}

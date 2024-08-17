import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Vehicle {
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

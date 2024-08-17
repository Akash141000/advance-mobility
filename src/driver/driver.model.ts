import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class DriverModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  phoneNumber: number;

  @Column()
  profilePhoto: string;
}

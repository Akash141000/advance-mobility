import { Injectable } from '@nestjs/common';

@Injectable()
export class DriverService {
  getDriver(): string {
    return 'Driver';
  }
}

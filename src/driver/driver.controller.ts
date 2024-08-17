import { Controller, Get } from '@nestjs/common';
import { DriverService } from './driver.service';

@Controller('/driver')
export class DriverController {
  constructor(private readonly appDriver: DriverService) {}

  @Get()
  getDriver(): string {
    return this.appDriver.getDriver();
  }
}

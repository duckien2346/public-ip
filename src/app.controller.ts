import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getIp(@Res() response: any) {
    this.appService.getIp().subscribe(({ data }) => {
      response.send(data);
      console.log(data);
    });
    // return this.appService.ip;
  }
}

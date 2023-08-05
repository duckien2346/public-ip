import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  ip: undefined | string;
  constructor(private readonly httpService: HttpService) {}

  getHello(): string {
    return 'Hello World!';
  }

  getIp() {
    // if (this.ip === undefined) {
    //   this.httpService.get('https://api.ipify.org').subscribe((res) => {
    //     this.ip = res.data;
    //     console.log(res.data);
    //   });
    // }
    // return this.ip;
    return this.httpService.get('https://api.ipify.org');
  }
}

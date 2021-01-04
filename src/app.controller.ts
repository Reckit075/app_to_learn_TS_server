import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  // @Get() to (dekorator) który pozwala mi wyświeltić konkretne rzeczy na konkretnych podstronach
  // @Get() będzie wyświetlać swoja zawartość na adresie localhost:3001
  // @Get('/test') będzie wyświetlać swoją zawartośc na adresie localhost:3001/test
  // itd.
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

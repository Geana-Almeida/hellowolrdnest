import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("/turma")//Não pode ter dois verbos iguais no mesmo caminho, para ter dois verbos iguais precisa trocar o caminho da requisição.
  getTurma(): string {
    return this.appService.getTurma();
  }
}

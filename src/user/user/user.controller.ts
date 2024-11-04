import { Controller, Get, Param, Query } from '@nestjs/common';
@Controller('/api/users')
export class UserController {
  @Get('/hello')
  sayHello(
    @Query('frist_name') firstName: string,
    @Query('frist_email') lastName: string,
  ): string {
    return `hello ${firstName} ${lastName}`;
  }
  @Get('/:id')
  get(@Param('id') id: string): string {
    return `GET ${id}`;
  }
}

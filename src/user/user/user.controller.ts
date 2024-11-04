import { Controller, Get, Header, HttpCode, HttpRedirectResponse, Param, Query, Redirect, Res } from "@nestjs/common";
import { Response } from 'express';

@Controller('/api/users')
export class UserController {
  @Get('/sample-response')
  @Header('Content-Type', 'application/json')
  @HttpCode(200)
  sampleResponse(): Record<string, string> {
    return {
      "data": "Hello World!"
    }
 }

 @Get('/redirect')
 @Redirect()
 redirect(): HttpRedirectResponse {
    return {
      url: 'api/users/sample-response',
      statusCode: 301,
    }
 }
  @Get('/hello')
  sayHello(
    @Query('first_name') firstName: string,
    @Query('first_email') lastName: string,
  ): string {
    return `hello ${firstName} ${lastName}`;
  }

  @Get('/:id')
  get(@Param('id') id: string): string {
    return `GET ${id}`;
  }
}

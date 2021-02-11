/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  Body,
  HttpCode,
  HttpStatus,
  Response,
} from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post()
  async addUser(
    @Body('name') name: string,
    @Body('password') password: string,
  ) {
    const serviceResponse = await this.userService.registerUser(name, password);
    throw serviceResponse;
  }

  @Get()
  @HttpCode(220)
  async getAllUsers(@Response() res: any) {
    const response = await this.userService.getUsers();
    return res.status(HttpStatus.OK).json(response);
  }

  // Login
  @Post('login')
  async loginUser(
    @Body('name') loginName: string,
    @Body('password') loginPassword: string,
  ) {
    const serviceResponse = await this.userService.loginUser(
      loginName,
      loginPassword,
    );
    return serviceResponse;
  }
}

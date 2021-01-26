/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, HttpCode,HttpStatus, Response } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post('register')
  async addUser(
    @Body('name') Name: string,
    @Body('password') Password: string,
  ) {
    const serviceResponse = await this.userService.registerUser(Name, Password);
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
    const serviceResponse = await this.userService.loginUser(loginName, loginPassword);
    throw serviceResponse;
  }
}
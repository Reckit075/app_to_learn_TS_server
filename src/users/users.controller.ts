/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, BadRequestException} from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  // Zwrócic kod HTTP flase w sytuacji niepowodzenia true w sytuacji powodzenia
  // Registration
  @Post('register')
  async addUser(
    @Body('name') prodName: string,
    @Body('password') prodPassword: string,
  ) {
    const serviceResponse = await this.userService.registerUser(prodName, prodPassword);
    throw serviceResponse;
  }

  @Get()
  async getAllUsers() {
    const users = await this.userService.getUsers();
    return users;
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
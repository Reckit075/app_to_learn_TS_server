/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, BadRequestException} from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  // Zwrócic kod HTTP flase w sytuacji niepowodzenia true w sytuacji powodzenia

  @Post('register')
  async addUser(
    @Body('name') prodName: string,
    @Body('password') prodPassword: string,
  ) {
    const generatedId = await this.userService.insertUser(prodName, prodPassword);
    if(generatedId === undefined) throw new BadRequestException('User was not added');
    else return {succes: true};
  }

  @Get()
  async getAllUsers() {
    const users = await this.userService.getUsers();
    return users;
  }
}
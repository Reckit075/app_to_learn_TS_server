import { Injectable, HttpException } from '@nestjs/common';
import { UserDto } from '../models/user.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  private users: UserDto[] = [];
  private test: any;
  constructor(
    @InjectModel('Users') private readonly userModel: Model<UserDto>,
  ) {}

  async registerUser(name: string, password: string) {
    try {
      const nameCondition = await this.userModel.findOne({ name }).exec();
      const passCondition = await this.userModel.findOne({ password }).exec();
      const newUser = new this.userModel({
        name,
        password,
      });
      if (nameCondition === null && passCondition === null) {
        await newUser.save();
        return new HttpException('User was created', 200);
      } else {
        return new HttpException(
          'User with that login or password exists',
          404,
        );
      }
    } catch (error) {
      console.error(error);
    }
  }

  async getUsers() {
    try {
      const users = await this.userModel.find().exec();
      if (users === []) {
        return new HttpException('There is no users', 404);
      }
      return users.map((user) => ({
        id: user.id,
        name: user.name,
        password: user.password,
      }));
    } catch (error) {
      console.error(error);
    }
  }

  async loginUser(name: string, password: string) {
    try {
      if ((await this.userModel.findOne({ name, password }).exec()) !== null) {
        // Poinformowanie o tym że użytkownik jest zalogowany
        return new HttpException('You logged in', 200);
      } else {
        return new HttpException(
          'User with that login or password not exists',
          404,
        );
      }
    } catch (error) {
      console.error(error);
    }
  }
}

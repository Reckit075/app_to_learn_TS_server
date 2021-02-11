import { Injectable, HttpException } from '@nestjs/common';
import { User } from '../models/user.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  private users: User[] = [];
  constructor(@InjectModel('Users') private readonly userModel: Model<User>) {}

  async registerUser(name: string, password: string) {
    try {
      const nameCondition = await this.userModel.findOne({ name }).exec();
      const newUser = new this.userModel({
        name,
        password,
      });
      if (nameCondition === null) {
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
      return new HttpException(error, 400);
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
      return new HttpException(error, 400);
    }
  }

  async loginUser(name: string, password: string) {
    try {
      if ((await this.userModel.findOne({ name, password }).exec()) !== null) {
        return await this.userModel.findOne({ name, password }).exec();
      } else {
        return new HttpException(
          'User with that login or password not exists',
          404,
        );
      }
    } catch (error) {
      console.error(error);
      return new HttpException(error, 400);
    }
  }
}

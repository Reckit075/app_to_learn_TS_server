/* eslint-disable prettier/prettier */
import { Injectable, HttpException, BadRequestException } from '@nestjs/common';
import { User } from '../models/user.model'
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

@Injectable()
export class UsersService {
    private users: User[] = [];
    private test: any;
    constructor(@InjectModel('Users') private readonly userModel: Model<User>){}

    async registerUser(name: string, password: string){
      try {
        const nameCondition = await this.userModel.findOne({ name }).exec();
        const passCondition = await this.userModel.findOne({ password }).exec();
        const newUser = new this.userModel({
          name,
          password
        });
        if (nameCondition === null && passCondition === null) {
          await newUser.save();
          return new HttpException('User was created', 200);
        } else {
          return new BadRequestException('User with that login or password exists');
        } 
      } catch (error) {
        console.error(error);
      }
    }  

    async getUsers() {
      try {
        const products = await this.userModel.find().exec();
        return products.map((prod) => ({
          id: prod.id,
          name: prod.name,
          password: prod.password,
        }));
      } catch (error) {
        console.error(error);
      }
    }

    async loginUser(name: string, password: string){
      try {
        if (await this.userModel.findOne({ name, password }).exec() !== null) {
          // Poinformowanie o tym że użytkownik jest zalogowany
          return new HttpException('You logged in', 200);
        } else {
          return new BadRequestException('User with that login or password doesn\'t exists ');
        }
      } catch (error) {
        console.error(error);
      }
    }  
}
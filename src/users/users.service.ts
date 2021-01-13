/* eslint-disable prettier/prettier */
import { Injectable, HttpException } from '@nestjs/common';
import { User} from '../models/user.model'
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import e from 'express';

@Injectable()
export class UsersService {
    private users: User[] = [];
    private test: any;
    constructor(@InjectModel('User') private readonly userModel: Model<User>, ){}

    async insertUser(name: string, password: string){
      try{
        this.userModel.findOne({ name })
          .then( user => {
            console.log(user);
          })
        const newUser = new this.userModel({
          name,
          password
        });
        const result = await newUser.save();
        console.log(result);
        return result.id as string;
      }
      catch(error){
        console.error(error);
      }
    }  

    async getUsers() {
      try{
        const products = await this.userModel.find().exec();
        return products.map(prod => ({
          id: prod.id,
          name: prod.name,
          password: prod.password,
        }));
      }
      catch(error){
        console.error(error);
        
      }
    }
}
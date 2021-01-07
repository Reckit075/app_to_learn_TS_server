import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {User} from '../models/users.schema'

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(User.name)
        private UserModel: Model<User>,
    ){}
}

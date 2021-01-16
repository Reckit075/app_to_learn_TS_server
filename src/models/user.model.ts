/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

export type UserDocument = User & mongoose.Document;
@Schema()
export class User {
  @Prop({ required: true })
  name: string;
  @Prop({ required: true })
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);

export interface UserDto extends mongoose.Document{
  id: string;
  name: string;
  password: string;
}
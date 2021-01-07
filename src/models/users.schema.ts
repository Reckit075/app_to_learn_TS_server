import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export class User extends Document{
    @Prop({ required: true })
    name: string;
  
    @Prop({ required: true })
    password: string;
  }

  export const UserSchema = SchemaFactory.createForClass(User);
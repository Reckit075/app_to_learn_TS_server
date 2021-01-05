import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export class User {
    @Prop({ required: true })
    name: string;
  
    @Prop({ required: true })
    password: string;
  }

  export const CatSchema = SchemaFactory.createForClass(User);
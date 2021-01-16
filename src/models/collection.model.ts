import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { UserDto } from './user.model';

export type CollectionDocument = Collection & mongoose.Document;
@Schema()
export class Collection {
  @Prop({ required: true })
  title: string;
  @Prop({ required: true })
  description: string;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  userId: UserDto;
}

export const CollectionSchema = SchemaFactory.createForClass(Collection);

export interface CollectionDto extends mongoose.Document {
  id: string;
  title: string;
  description: string;
  userId: string;
}

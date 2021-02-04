import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

export type CollectionDocument = Collection & mongoose.Document;
@Schema()
export class Collection {
  @Prop({ required: true })
  title: string;
  @Prop({ required: true })
  description: string;
  @Prop({ required: true })
  ownerID: string;
}

export const CollectionSchema = SchemaFactory.createForClass(Collection);

export interface Collection extends mongoose.Document {
  id: string;
  title: string;
  description: string;
  ownerID: string;
}

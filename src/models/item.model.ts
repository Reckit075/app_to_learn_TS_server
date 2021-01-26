import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Collection } from './collection.model';

export type ItemDocument = Item & mongoose.Document;
@Schema()
export class Item {
  @Prop({ required: true })
  title: string;
  @Prop({ required: true })
  author: string;
  @Prop({ required: true })
  description: string;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Collection' })
  collectionId: Collection;
}

export const ItemSchema = SchemaFactory.createForClass(Item);

export interface Item extends mongoose.Document {
  id: string;
  title: string;
  author: string;
  description: string;
  collectionId: Collection;
}

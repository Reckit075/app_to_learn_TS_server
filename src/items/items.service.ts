import { Injectable, HttpException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Item } from '../models/item.model';

@Injectable()
export class ItemsService {
  private users: Item[] = [];
  private test: any;
  constructor(@InjectModel('Items') private readonly itemModel: Model<Item>) {}

  async createItem(
    title: string,
    author: string,
    description: string,
    collectionID: string,
  ) {
    try {
      console.log(collectionID);
      const newItem = new this.itemModel({
        title,
        author,
        description,
        collectionID,
      });
      await newItem.save();
      return new HttpException('Item was created', 200);
    } catch (error) {
      console.error(error);
      return new HttpException(error, 400);
    }
  }

  async getItems(collectionID: string) {
    try {
      const items = await this.itemModel
        .find({ collection: collectionID })
        .exec();
      if (items === []) {
        return new HttpException('There is no items', 404);
      }
      return items.map((item) => ({
        id: item.id,
        title: item.title,
        author: item.author,
        description: item.description,
      }));
    } catch (error) {
      console.error(error);
      return new HttpException(error, 400);
    }
  }
}

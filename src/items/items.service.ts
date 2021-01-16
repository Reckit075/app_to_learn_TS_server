import { Injectable, HttpException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Item } from '../models/item.model';

@Injectable()
export class ItemsService {
  private users: Item[] = [];
  private test: any;
  constructor(@InjectModel('Items') private readonly itemModel: Model<Item>) {}

  async createItem(title: string, author: string, description: string) {
    try {
      const newItem = new this.itemModel({
        title,
        author,
        description,
      });
      await newItem.save();
      return new HttpException('Item was created', 200);
    } catch (error) {
      console.error(error);
    }
  }

  async getItems() {
    try {
      const products = await this.itemModel.find().exec();
      return products.map((prod) => ({
        id: prod.id,
        title: prod.title,
        author: prod.author,
        description: prod.description,
      }));
    } catch (error) {
      console.error(error);
    }
  }
}

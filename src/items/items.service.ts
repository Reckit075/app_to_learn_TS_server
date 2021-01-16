import { Injectable, HttpException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ItemDto } from '../models/item.model';

@Injectable()
export class ItemsService {
  private users: ItemDto[] = [];
  private test: any;
  constructor(
    @InjectModel('Items') private readonly itemModel: Model<ItemDto>,
  ) {}

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
      const items = await this.itemModel.find().exec();
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
    }
  }
}

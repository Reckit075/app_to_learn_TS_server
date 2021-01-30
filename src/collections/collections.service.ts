import { HttpException, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Collection } from "src/models/collection.model";



@Injectable()
export class CollectionsService {
    private users: Collection[] = [];
    private test: any;
   constructor(@InjectModel('Collections') private readonly collectionModel: Model<Collection>) {}

  async createCollection(title: string, description: string) {
    try {
      const newCollection = new this.collectionModel({
        title,
        description,
      });
      await newCollection.save();
      return new HttpException('Collection was created', 200);
    } catch (error) {
      console.error(error);
      return new HttpException(error, 400);
    }
  }

  async getCollections() {
    try {
      const collections = await this.collectionModel.find().exec();
      if (collections === []) {
        return new HttpException('There is no items', 404);
      }
      return collections.map((collection) => ({
        id: collection.id,
        title: collection.title,
        description: collection.description,
      }));
    } catch (error) {
      console.error(error);
      return new HttpException(error, 400);
    }
  }
}
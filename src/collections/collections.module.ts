import { Module } from '@nestjs/common';
import { MongooseModule } from "@nestjs/mongoose";
import { CollectionSchema } from 'src/models/collection.model';
import { CollectionsController } from "./collections.controller";
import { CollectionsService } from "./collections.service";


@Module({
    imports: [MongooseModule.forFeature([{ name: 'Collections', schema: CollectionSchema }])],
    controllers: [CollectionsController],
    providers: [CollectionsService],
  })
  export class CollectionsModule {}
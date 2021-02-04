import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { ItemsService } from './items.service';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemService: ItemsService) {}

  @Post()
  async addItem(
    @Body('title') Title: string,
    @Body('author') Author: string,
    @Body('description') Description: string,
    @Body('collectionID') CollectionID: string,
  ) {
    const serviceResponse = await this.itemService.createItem(
      Title,
      Author,
      Description,
      CollectionID,
    );
    return serviceResponse;
  }

  @Get()
  async getAllItems(@Query('collectionID') CollectionID: string) {
    const response = await this.itemService.getItems(CollectionID);
    return response;
  }
}

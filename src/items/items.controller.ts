import { Controller, Get, Post, Body } from '@nestjs/common';
import { ItemsService } from './items.service';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemService: ItemsService) {}

  @Post('add')
  async addItem(
    @Body('title') Title: string,
    @Body('author') Author: string,
    @Body('description') Description: string,
  ) {
    const serviceResponse = await this.itemService.createItem(
      Title,
      Author,
      Description,
    );
    return serviceResponse;
  }

  @Get()
  async getAllItems() {
    const response = await this.itemService.getItems();
    return response;
  }
}

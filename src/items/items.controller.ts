import { Controller, Get, Post, Body } from '@nestjs/common';
import { ItemsService } from './items.service';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemService: ItemsService) {}

  @Post('add')
  async addItem(
    @Body('title') prodTitle: string,
    @Body('author') prodAuthor: string,
    @Body('description') prodDescription: string,
  ) {
    const serviceResponse = await this.itemService.createItem(
      prodTitle,
      prodAuthor,
      prodDescription,
    );
    throw serviceResponse;
  }

  @Get()
  async getAllItems() {
    const response = await this.itemService.getItems();
    return response;
  }
}

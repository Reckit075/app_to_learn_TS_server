import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { CollectionsService } from './collections.service';

@Controller('collections')
export class CollectionsController {
  constructor(private readonly collectionsService: CollectionsService) {}

  @Post()
  async addCollection(
    @Body('title') Title: string,
    @Body('description') Description: string,
    @Body('ownerID') OwnerID: string,
  ) {
    const serviceResponse = await this.collectionsService.createCollection(
      Title,
      Description,
      OwnerID,
    );
    return serviceResponse;
  }

  @Get()
  async getAllCollections(@Query('ownerID') OwnerID: string) {
    console.log(OwnerID);
    const response = await this.collectionsService.getCollections(OwnerID);
    return response;
  }
}

import { Body, Controller, Get, Post } from "@nestjs/common";
import { CollectionsService } from "./collections.service";

@Controller('collections')
export class CollectionsController {
  
    constructor(private readonly collectionsService: CollectionsService) {}

  @Post('add')
  async addCollection(
    @Body('title') Title: string,
    @Body('description') Description: string,
  ) {
    const serviceResponse = await this.collectionsService.createCollection(
      Title, 
      Description,
    );
    return serviceResponse;
  }

  @Get()
  async getAllCollectios() {
    const response = await this.collectionsService.getCollections();
    return response;
  }
}
/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { ItemsModule } from './items/items.module';

@Module({
  imports: [UsersModule, MongooseModule.forRoot('mongodb+srv://Patryk:9h9LmaZK5e4R3FB@cluster0.cfphj.mongodb.net/database_to_learn_TS?retryWrites=true&w=majority'), ItemsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
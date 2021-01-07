import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://Patryk:9h9LmaZK5e4R3FB@cluster0.cfphj.mongodb.net/database_to_learn_TS?retryWrites=true&w=majority'), UsersModule],
  controllers: [AppController, UsersController],
  providers: [AppService],
})
export class AppModule {}
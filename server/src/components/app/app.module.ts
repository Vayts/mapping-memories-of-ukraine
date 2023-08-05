import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MapModule } from '../map/map.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(
      'mongodb+srv://admin:admin@users.fdv5b.mongodb.net/mapmem',
    ),
    MapModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

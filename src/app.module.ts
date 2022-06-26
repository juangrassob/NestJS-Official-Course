import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesModule } from './coffees/coffees.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoffeeRatingModule } from './coffee-rating/coffee-rating.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      // envFilePath: '.environment', -> In case i want to name .env in a different way. Also accept arrays of files names
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: Number(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      autoLoadEntities: true,
      synchronize: true, // Set false in production -> Generate a SQL table with all the classes
      //------------------- with the @Entity() decorator and the metadata it contains.
    }),
    CoffeesModule,
    CoffeeRatingModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { CoffeeRatingService } from './coffee-rating.service';
import { CoffeesModule } from '../coffees/coffees.module';
import { CoffeesService } from '../coffees/coffees.service';

@Module({
  imports: [CoffeesModule],
  providers: [CoffeeRatingService],
})
export class CoffeeRatingModule {}

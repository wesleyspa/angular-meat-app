import { Component, OnInit } from '@angular/core';
import { Restaurant } from 'app/restaurants/restaurant/Restaurant.model';
import { RestaurantService } from 'app/restaurants/restaurants.service';

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html'
})
export class RestaurantsComponent implements OnInit {

  restaurants: Restaurant[]

  constructor(private restaurantService: RestaurantService) { }

  ngOnInit() {
    this.restaurantService.restaurants().subscribe(restaurants => this.restaurants = restaurants);
  }

}

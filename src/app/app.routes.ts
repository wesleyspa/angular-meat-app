import { Routes } from '@angular/router'
import { HomeComponent } from 'app/home/home.component';
import { AboutComponent } from 'app/about/about.component';
import { RestaurantsComponent } from 'app/restaurants/restaurants.component';
import { RestaurantDetailComponent } from 'app/restaurant-detail/restaurant-detail.component';
import { ReviewsComponent } from 'app/restaurant-detail/reviews/reviews.component';
import { MenuItemComponent } from 'app/restaurant-detail/menu-item/menu-item.component';
import { MenuComponent } from 'app/restaurant-detail/menu/menu.component';
import { OrderComponent } from 'app/order/order.component';
import { OrderSummaryComponent } from 'app/order-summary/order-summary.component';

export const ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'restaurants', component: RestaurantsComponent },
    { path: 'order-summary', component: OrderSummaryComponent },
    { path: 'order', component: OrderComponent },
    {
        path: 'restaurants/:id', component: RestaurantDetailComponent,
        children: [
            { path: '', redirectTo: 'menu', pathMatch: 'full' },
            { path: 'menu', component: MenuComponent },
            { path: 'reviews', component: ReviewsComponent }
        ]
    }
]
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { TravelComponent } from './travel/travel.component';
import { CartComponent } from './cart/cart.component';
import { ProductDetailsComponent } from './product-details/product-details.component';


const routes: Routes = [{
	path: "", component: HomeComponent
},{
	path: "app-blog", component: BlogComponent
},{
	path: "app-travel", component: TravelComponent
},{
	path: "app-cart", component: CartComponent
},{
	path: "travelList/:travelId", component: ProductDetailsComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

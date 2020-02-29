import { Component, OnInit } from '@angular/core';
import { CartService} from '../cart.service';
import {travelList} from '../theList';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
	items; 

  constructor(private cartService: CartService) { 
		console.log(this.items);

  }
  	
 ngOnInit(){
  	this.items = this.cartService.getItems();
  }

}

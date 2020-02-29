import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {travelList} from '../theList';
import { CartService } from '../cart.service';



@Component({
  selector: 'product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
travel;
  constructor(private route: ActivatedRoute, private cartService: CartService) { }

 addToCart(travel) {
   window.alert('Your product has been added to the cart!');
   this.cartService.addToCart(travel);
 }



  ngOnInit(){
  		  this.route.paramMap.subscribe(params => {
   this.travel = travelList[+params.get('travelId')];
  });

  }

}








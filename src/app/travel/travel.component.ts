import { Component, OnInit } from '@angular/core';
import {travelList} from '../theList';
import {CartService} from '../cart.service';


@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css']
})

export class TravelComponent implements OnInit {
 travelList = travelList;

  constructor() { }

 	

  ngOnInit() {
  	
}
}

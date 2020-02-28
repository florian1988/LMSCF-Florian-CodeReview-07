import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
out = [ ];
inputBlog = new FormGroup({
	name: new FormControl(''),
	text: new FormControl('')
}); 

  constructor() { }


  ngOnInit() {
  }

 onSubmit(){
 // to take the values from the form you can select the property that have the formGroup and then just add .value
   var output = this.inputBlog.value;
   this.out.push(output);
   this.inputBlog.reset();

   

 }


}


import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],

})
export class HomepageComponent implements OnInit {
  categoryList = []	
  constructor(private http:Http) { }

  ngOnInit() {
  	this.http.get("./static/homepage.json")
  	.map(res=>res.json())
  	.subscribe(data=>{
  		this.categoryList = data.categoryList;
  		// console.log(data.categoryList);
  	})

    
  }

}

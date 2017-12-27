import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {
  CPlist = [] 	
  constructor(private http:Http) { }

  ngOnInit() {
  	this.http.get("./static/match.json")
  	.map(res=>res.json())
  	.subscribe(data=>{
  		this.CPlist = data.CPlist;
  		// console.log(data.categoryList);
  	})
  }

}

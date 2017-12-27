import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
	usersList = []
  constructor(private http:Http) { }

  
  ngOnInit() {
  	this.http.get("./static/userlist.json")
  	.map(res=>res.json())
  	.subscribe(data=>{
  		this.usersList = data.usersList;
  		// console.log(data.followList)
  	})
  }

}

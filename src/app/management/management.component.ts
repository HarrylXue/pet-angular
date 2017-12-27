import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.css']
})
export class ManagementComponent implements OnInit {
  managementList = []
  constructor(private http:Http) { }

  ngOnInit() {
  	this.http.get("./static/management.json")
  	.map(res=>res.json())
  	.subscribe(data=>{
  		this.managementList = data.managementList;
  		// console.log(data.managementList);
  	})
  }

}

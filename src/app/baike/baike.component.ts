import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-baike',
  templateUrl: './baike.component.html',
  styleUrls: ['./baike.component.css']
})
export class BaikeComponent implements OnInit {
  questionList = []					
  constructor(private http:Http) { }

  ngOnInit() {
  	this.http.get("./static/baike.json")
  	.map(res=>res.json())
  	.subscribe(data=>{
  		this.questionList = data.questionList;
  		// console.log(data.questionList);
  	})
  }

}

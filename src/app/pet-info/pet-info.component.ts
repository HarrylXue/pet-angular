import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-pet-info',
  templateUrl: './pet-info.component.html',
  styleUrls: ['./pet-info.component.css']
})
export class PetInfoComponent implements OnInit {
  picturesList = []
  size = 0
  More(){
  	var div = document.querySelector('.menu_box');
    this.size += 70;
    div.scrollTo(this.size,0)
    
  }
  constructor(private http:Http) { }

  ngOnInit() {
  	this.http.get("./static/picture.json")
    .map(res=>res.json())
    .subscribe(data=>{
      this.picturesList = data.picturesList;
            
    });

  }

}

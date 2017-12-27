import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css']
})
export class CommunityComponent implements OnInit {
  counts = 2
  functionList = []
  usersList = []
  hotList = []
  size = 0
  jump(){
    const div = document.querySelector('.menu_box');
    this.size += 70;
    div.scrollTo(this.size,0)
    
  }
  thumb(){
    
     this.counts++
  }
  add(){
    alert("已关注")
  }
  constructor(private http:Http) { }

  ngOnInit() {
    this.http.get("./static/community.json")
    .map(res=>res.json())
    .subscribe(data=>{
      this.functionList = data.functionList;
      this.usersList = data.usersList;
      this.hotList = data.hotList;
      
    });

  	var swiper = new Swiper('.swiper-container', {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        }
      }); 
  }

}

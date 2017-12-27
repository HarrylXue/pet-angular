import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  shopList = []
  constructor(private http:Http) { }

  ngOnInit() {
  	this.http.get("./static/shop.json")
    .map(res=>res.json())
    .subscribe(data=>{
      this.shopList = data.shopList;
      
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

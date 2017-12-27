import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-discount',
  templateUrl: './discount.component.html',
  styleUrls: ['./discount.component.css']
})
export class DiscountComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  	$('.quan').on("click",function(){
  		alert("领券成功")
  	})

  	$('.btn_buy').on("click",function(){
  		alert("加入购物车成功")
  	})
  }

}

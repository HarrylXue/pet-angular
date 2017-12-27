import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  report(){
  	alert("发送成功...");
  	window.history.go(-1);
  }	
  constructor() { }

  ngOnInit() {
  }

}

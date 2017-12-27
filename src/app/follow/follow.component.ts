import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import * as $ from 'jquery';
@Component({
  selector: 'app-follow',
  templateUrl: './follow.component.html',
  styleUrls: ['./follow.component.css']
})
export class FollowComponent implements OnInit {
	followList = [];
	
	deletefollow(index){
		if(confirm("确认取消关注此用户？")){
			this.followList.splice(index,1);
      alert('已取消关注此用户');
		}
	}	

	// $(document).on('click','.confirm-title-ok-cancel', function () {
 //      $.confirm('Are you sure?', 'Custom Title',
 //        function () {
 //          $.alert('You clicked Ok button');
 //        },
 //        function () {
 //          $.alert('You clicked Cancel button');
 //        }
 //      );
 //  });
  constructor(private http:Http) { }
  // 从json获取数据
  ngOnInit() {
  	this.http.get("./static/follow.json")
  	.map(res=>res.json())
  	.subscribe(data=>{
  		this.followList = data.followList;
  		// console.log(data.followList)
  	})

  }

}

import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
declare var $:any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  	
  username = '';
  password = '';
  uname = '';
  pwd = '';


  check(){
  	console.log(localStorage.getItem('name'))
  	var name = localStorage.getItem('name');
  	var psd = localStorage.getItem('pwd');
  	if(this.username==name&&this.password==psd){
  		alert("登陆成功");
  		console.log(localStorage.getItem('name'))
  		this.router.navigate(['/homepage']); 		

  	}else{
  		alert("用户名或密码错误,登录失败")
  	}

  }
  constructor(private http:Http,private router: Router) { }

  ngOnInit() {
  	// this.http.get("./static/user_info.json")
  	// .map(res=>res.json())
  	// .subscribe(data=>{
  	// 	this.uname = data.username;
  	// 	this.pwd = data.password;
  	// 	console.log(data.username,data.password)
  	// })
  	

  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $:any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  username = '';
  password = '';
  phone = '';
  register(){
  	localStorage.setItem('name',this.username);
  	localStorage.setItem('pwd',this.password);
  	this.router.navigate(['/login']);
  	alert("注册成功")
  }
  constructor(private router: Router) { }

  ngOnInit() {
  }

}

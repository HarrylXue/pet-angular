import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $:any;
@Component({
  selector: 'app-lostpwd',
  templateUrl: './lostpwd.component.html',
  styleUrls: ['./lostpwd.component.css']
})
export class LostpwdComponent implements OnInit {
  phone = '';
  code = '';
  password = '';
  disabled = false;
  tips = '获取验证码';
  getcode(){
    let number = 60;
    this.disabled = true;
    const that = this;
    that.tips = number + 's后重新获取';
    const timer = setInterval(function(){
      number--;
      if(number===0){
        that.disabled = false;
        that.tips = '获取验证码';
        clearInterval(timer);
      }else{
        that.tips = number + 's后重新获取';
      }
    },1000); 

  }
  checked(){
  	localStorage.setItem('pwd',this.password);
  	alert("密码重置成功")
  }			
  constructor(private router: Router) { }

  ngOnInit() {
  }

}

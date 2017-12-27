import { Component , ElementRef, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
declare var $: any;
@Component({
  selector: 'app-zone',
  templateUrl: './zone.component.html',
  styleUrls: ['./zone.component.css']
})
export class ZoneComponent implements OnInit {
  zoneList =[] 


  constructor(private http:Http,public _elementRef: ElementRef) { }

  ngOnInit():any {
  	this.http.get("./static/zone.json")
    .map(res=>res.json())
    .subscribe(data=>{
      this.zoneList = data.zoneList;
      
      $("#thumbsup").on("click",function(){
        console.log("success")
      })
    });

    

  }

}

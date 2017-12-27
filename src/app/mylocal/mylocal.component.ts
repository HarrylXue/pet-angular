import { Component, OnInit } from '@angular/core';
declare var BMap:any;
declare var BMAP_STATUS_SUCCESS:any;

@Component({
  selector: 'app-mylocal',
  templateUrl: './mylocal.component.html',
  styleUrls: ['./mylocal.component.css']
})
export class MylocalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	 // 百度地图API功能
	var map = new BMap.Map("allmap");
	var point = new BMap.Point(119.405842,32.377379);
	map.centerAndZoom(point,15);
	map.enableScrollWheelZoom();    

	var geolocation = new BMap.Geolocation();
	geolocation.getCurrentPosition(function(r){
		if(this.getStatus() == BMAP_STATUS_SUCCESS){
			var mk = new BMap.Marker(r.point);
			map.addOverlay(mk);
			map.panTo(r.point);
			
			//alert('您的位置：'+r.point.lng+','+r.point.lat);
		}
		else {
			alert('failed'+this.getStatus());
		}        
	},{enableHighAccuracy: true})
  }

}

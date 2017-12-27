import { Component, OnInit } from '@angular/core';
declare var BMap:any;
@Component({
  selector: 'app-localhospital',
  templateUrl: './localhospital.component.html',
  styleUrls: ['./localhospital.component.css']
})
export class LocalhospitalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	 // 百度地图API功能
	var map = new BMap.Map("allmap");
	var point = new BMap.Point(119.405842,32.377379);

	// 添加带有定位的导航控件
  var navigationControl = new BMap.NavigationControl({
    // 靠左上角位置
   
    enableGeolocation: true
  });
  map.addControl(navigationControl);
  // 添加定位控件
  var geolocationControl = new BMap.GeolocationControl();
  geolocationControl.addEventListener("locationSuccess", function(e){
    // 定位成功事件
    var address = '';
    address += e.addressComponent.province;
    address += e.addressComponent.city;
    address += e.addressComponent.district;
    address += e.addressComponent.street;
    address += e.addressComponent.streetNumber;
    alert("当前定位地址为：" + address);
  });
  geolocationControl.addEventListener("locationError",function(e){
    // 定位失败事件
    alert(e.message);
  });
  map.addControl(geolocationControl);
	map.centerAndZoom(point, 15);
	map.enableScrollWheelZoom();   //启用滚轮放大缩小，默认禁用
	map.enableContinuousZoom();    //启用地图惯性拖拽，默认禁用
	var data_info = [[119.410206,32.374592,"爱康动物医院"],
					 [119.410092,32.392688,"扬城宠物医院"],
					 [119.423852,32.381673,"开心宠物店"],
					 [119.402007,32.402006,"东艾宠物医院"],
					 [119.394809,32.397643,"扬州宝兴农大宠物医院"]
					];
	//创建logo
	var pt = new BMap.Point(119.405842,32.377379);
	var myIcon = new BMap.Icon("../../assets/maplogo.png", new BMap.Size(140,190));
	var marker2 = new BMap.Marker(pt,{icon:myIcon});  // 创建标注
	map.addOverlay(marker2);

	var opts = {
	  position : point,    // 指定文本标注所在的地理位置
	  offset   : new BMap.Size(-10, 86),    //设置文本偏移量

	  width : 250,     // 信息窗口宽度
	  height: 80,     // 信息窗口高度
	  title : "宠物医院" , // 信息窗口标题
	  enableMessage:true//设置允许信息窗发送短息
	}
	var label = new BMap.Label("我的位置", opts);  // 创建文本标注对象
		label.setStyle({
			 color : "black",
			 fontSize : "12px",
			 height : "20px",
			 lineHeight : "20px",
			 fontFamily:"微软雅黑",
			 border:"none"
		 });
	map.addOverlay(label);

	for(var i=0;i<data_info.length;i++){
		var marker = new BMap.Marker(new BMap.Point(data_info[i][0],data_info[i][1]));  // 创建标注
		var content = data_info[i][2];
		map.addOverlay(marker);               // 将标注添加到地图中
		addClickHandler(content,marker);
	}
	function addClickHandler(content,marker){
		marker.addEventListener("click",function(e){
			openInfo(content,e)}
		);
	}
	function openInfo(content,e){
		var p = e.target;
		var point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
		var infoWindow = new BMap.InfoWindow(content,opts);  // 创建信息窗口对象 
		map.openInfoWindow(infoWindow,point); //开启信息窗口
	}
  }

}

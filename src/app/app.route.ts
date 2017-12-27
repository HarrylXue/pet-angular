import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CommunityComponent } from './community/community.component';
import { FollowComponent } from './follow/follow.component';
import { BaikeComponent } from './baike/baike.component';
import { BaikedetailComponent } from './baikedetail/baikedetail.component';
import { ShareComponent } from './share/share.component';
import { ArticleComponent } from './article/article.component';
import { MatchComponent } from './match/match.component';
import { ManagementComponent } from './management/management.component';
import { MypetComponent } from './mypet/mypet.component';
import { PetInfoComponent } from './pet-info/pet-info.component';
import { ZoneComponent } from './zone/zone.component';
import { ShopComponent } from './shop/shop.component';
import { GoodsComponent } from './goods/goods.component';
import { DiscountComponent } from './discount/discount.component';
import { CartComponent } from './cart/cart.component';
import { SearchComponent } from './search/search.component';
import { OrdersComponent } from './orders/orders.component';
import { LocalshopComponent } from './localshop/localshop.component';
import { LocalhospitalComponent } from './localhospital/localhospital.component';
import { RegisterComponent } from './register/register.component';
import { LostpwdComponent } from './lostpwd/lostpwd.component';
import { MylocalComponent } from './mylocal/mylocal.component';
import { RecordComponent } from './record/record.component';
import { LuckComponent } from './luck/luck.component';
import { ActivityComponent } from './activity/activity.component';
import { ListComponent } from './list/list.component';
import { CameraComponent } from './camera/camera.component';
const appRoutes:Routes = [
	{path:"login",component:LoginComponent},
	{path:"community",component:CommunityComponent},
	{path:"homepage",component:HomepageComponent},
	{path:"follow",component:FollowComponent},
	{path:"baike",component:BaikeComponent},
	{path:"baikedetail",component:BaikedetailComponent},
	{path:"share",component:ShareComponent},
	{path:"article",component:ArticleComponent},
	{path:"match",component:MatchComponent},
	{path:"management",component:ManagementComponent},
	{path:"mypet",component:MypetComponent},
	{path:"pet-info",component:PetInfoComponent},
	{path:"zone",component:ZoneComponent},
	{path:"shop",component:ShopComponent},
	{path:"goods",component:GoodsComponent},
	{path:"discount",component:DiscountComponent},
	{path:"cart",component:CartComponent},
	{path:"search",component:SearchComponent},
	{path:"orders",component:OrdersComponent},
	{path:"localshop",component:LocalshopComponent},
	{path:"localhospital",component:LocalshopComponent},
	{path:"register",component:RegisterComponent},
	{path:"lostpwd",component:LostpwdComponent},
	{path:"mylocal",component:MylocalComponent},
	{path:"record",component:RecordComponent},
	{path:"luck",component:LuckComponent},
	{path:"activity",component:ActivityComponent},
	{path:"list",component:ListComponent},
	{path:"camera",component:CameraComponent},

	{path:"",redirectTo:"/login",pathMatch:"full"},
	{path:"**",component:LoginComponent},
]

@NgModule({
	imports:[
		RouterModule.forRoot(appRoutes)
	],
	exports:[
		RouterModule
	]
})
export class AppRoutingModules{}
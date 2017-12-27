import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModules } from './app.route';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { CommunityComponent } from './community/community.component';
import { FollowComponent } from './follow/follow.component';

import { HttpModule } from "@angular/http";
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
// import { MyHttpServer } from './httpServer';
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginComponent,
    CommunityComponent,
    FollowComponent,
    BaikeComponent,
    BaikedetailComponent,
    ShareComponent,
    ArticleComponent,
    MatchComponent,
    ManagementComponent,
    MypetComponent,
    PetInfoComponent,
    ZoneComponent,
    ShopComponent,
    GoodsComponent,
    DiscountComponent,
    CartComponent,
    SearchComponent,
    OrdersComponent,
    LocalshopComponent,
    LocalhospitalComponent,
    RegisterComponent,
    LostpwdComponent,
    MylocalComponent,
    RecordComponent,
    LuckComponent,
    ActivityComponent,
    ListComponent,
    CameraComponent
  ],
  imports: [
    BrowserModule,AppRoutingModules,FormsModule,HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

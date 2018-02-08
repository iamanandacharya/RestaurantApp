import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free';
import { HTTP } from '@ionic-native/http';


import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import {LoginPage} from '../pages/login/login';
import{OtpPage} from '../pages/otp/otp';
import {MenuPage} from '../pages/menu/menu';
import {SubmenuPage} from '../pages/submenu/submenu'
import {MapPage} from '../pages/map/map'
import { ViewCartPage } from '../pages/view-cart/view-cart';

import { NewOfferPage } from '../pages/new-offer/new-offer';
import { SelectBankPage } from '../pages/select-bank/select-bank';

import { PaymentMethodPage } from '../pages/payment-method/payment-method';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform,public admobFree: AdMobFree, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();
    platform.ready().then(()=>{
      this.showAdmobBannerAds();
      //this.showIntertitialAds();
    })
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      {title:'Logout' , component:LoginPage}
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  showAdmobBannerAds(){
    const bannerConfig:AdMobFreeBannerConfig={
      id:'ca-app-pub-6883187264507414/9946685866',
      isTesting:false,
      autoShow:true
    };
    this.admobFree.banner.config(bannerConfig);
    this.admobFree.banner.prepare()
    .then(() => {
      this.admobFree.banner.show()
    })
   
  
  }

  // showIntertitialAds(){
  //   const bannerConfig : AdMobFreeBannerConfig={
  //     id:'ca-app-pub-6883187264507414/5980177234',
  //     isTesting:false,
  //     autoShow:true
  //   };
  //   this.admobFree.interstitial.config(bannerConfig);
  //   this.admobFree.interstitial.prepare()
  //   .then(() => {
  //     this.admobFree.interstitial.show()
  //   });
  //   // //every two minute it show interstitial 
  //   // setInterval(this.admobFree.interstitial, 1*60*1000);
  // }
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
  ViewCart(){
    this.nav.push(ViewCartPage);
  }
  logoutPage(){
    this.nav.push(LoginPage);
  }
}

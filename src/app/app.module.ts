import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import {LoginPage} from '../pages/login/login';
import {OtpPage} from '../pages/otp/otp';
import {MenuPage} from '../pages/menu/menu';
import {SubmenuPage} from '../pages/submenu/submenu'
import {MapPage} from '../pages/map/map'

import { RegisterPage } from '../pages/register/register';
import { NewOfferPage } from '../pages/new-offer/new-offer';

import { ViewCartPage } from '../pages/view-cart/view-cart';

import { PaymentMethodPage } from '../pages/payment-method/payment-method';

import { SelectBankPage } from '../pages/select-bank/select-bank';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free';
// Import geoLocaiton plugin
import { Geolocation } from '@ionic-native/geolocation';
import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult } from '@ionic-native/native-geocoder';
import {LocationAccuracy} from '@ionic-native/location-accuracy'
import { HTTP } from '@ionic-native/http';

import { NativeStorage } from '@ionic-native/native-storage';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    OtpPage,
    MenuPage,
    SubmenuPage,
    MapPage,
    ViewCartPage,
    PaymentMethodPage,
    SelectBankPage,
    NewOfferPage,
    RegisterPage
   
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    OtpPage,
    MenuPage,
    SubmenuPage,
    MapPage,
    ViewCartPage,
    PaymentMethodPage,
    SelectBankPage,
    NewOfferPage,
    RegisterPage
   
  ],
  providers: [
    StatusBar,
    SplashScreen,
    // Add depedency
    Geolocation,
    NativeGeocoder,
    LocationAccuracy,
    AdMobFree,
    HTTP,
    NativeStorage,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

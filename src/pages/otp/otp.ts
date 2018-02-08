import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,MenuController } from 'ionic-angular';
import {HomePage} from '../home/home';
import {LoginPage} from '../login/login';
import {HTTP, HTTPResponse} from '@ionic-native/http';

import {FormGroup,FormControl,FormBuilder,Validators} from '@angular/forms'
import { Header } from 'ionic-angular/components/toolbar/toolbar-header';

/**
 * Generated class for the OtpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-otp',
  templateUrl: 'otp.html',
})
export class OtpPage {

public  otp_Number:number;
public responseData:any;
public mobileNumber:number;
public OTP:any;
public disabled:boolean = true;
public count:any;
private otpbox:any;
private authKey:any
private authKeyVerify:any="145578AtRaIZSym8r658cf8d98"

  constructor(private formBuilder:FormBuilder ,public navCtrl: NavController,public menuCtrl:MenuController, public navParams: NavParams,public http:HTTP) {
    this.otpbox = this.formBuilder.group({
      otp_number :  ['',Validators.required],   
           
  });
    this.OTP = "byText";
 //get mobile number from login.ts
    this.mobileNumber = navParams.get("mobileNumber");
    this.authKey = navParams.get("authkey");

  this.menuCtrl.enable(false)
  }

  
  ionViewDidLoad() {
    console.log('ionViewDidLoad OtpPage');
  }
  onClick(){
    
    setInterval(() => {
    
    }, 10000);
  }
//verify otp method
  doOtp(){ 
    let data ={
      'authkey' : this.authKey,
      'mobile': this.mobileNumber,
      'otp' : this.otpbox.controls.otp_number.value
    }
      let headers = new Headers();
      this.http.post("http://control.smsadverts.in/api/verifyRequestOTP.php",data,headers).then((res:HTTPResponse) => {
        this.responseData = res;
        console.log(res);
        localStorage.setItem('mobileData',JSON.stringify(this.responseData));
        alert('You are succesfully Login');
        this.navCtrl.setRoot(HomePage);
      })
    
   
      } 
    
    
    
  
//resend otp by text
  resendOtpByText(){
    let data = {
      'authkey' : this.authKey,
      'mobile': this.mobileNumber,
      'retrytype' : 'text'
      
    }
    let headers = new Headers();
    this.http.post("http://control.smsadverts.in/api/retryotp.php",data,headers).then((res:HTTPResponse) => {
      this.responseData = res;
      console.log(res);
      alert('Enter OTP Again');
    }
    
  ).catch((err) => {
    alert(err)
  }),(err) => {
    alert(err);
  }

  }

  //resend otp by voice
  resendOtpByVoice(){
    let data = {
      'authkey' : this.authKey,
      'mobile': this.mobileNumber,
      'retrytype' : 'voice'
      
    }
    let headers = new Headers();
    this.http.post("http://control.smsadverts.in/api/retryotp.php",data,headers).then((res:HTTPResponse) => {
      this.responseData = res;
      console.log(res);
      alert('Enter OTP Again');
    }
    
  ).catch((err) => {
    alert(err)
  }),(err) => {
    alert(err);
  }

  } 
  
  onBack($event){
    this.navCtrl.pop();
  }
}












import {Component} from '@angular/core';
import {AlertController,App,NavController,MenuController} from 'ionic-angular'
import {HomePage} from '../home/home'
import {FormGroup,FormControl,FormBuilder,Validators} from '@angular/forms'
import {OtpPage} from '../otp/otp'

import { NewOfferPage } from '../new-offer/new-offer';
import { PaymentMethodPage } from '../payment-method/payment-method';
import {HTTP, HTTPResponse} from '@ionic-native/http'
import { Header } from 'ionic-angular/components/toolbar/toolbar-header';

@Component ({
    selector:'login-page',
    templateUrl:'login.html'
})
export class LoginPage{

    public responseData:any;
    public country_code:number;
    private loginbox:any;
    private authKey:any ="145578AtRaIZSym8r658cf8d98";
    
    constructor(private formBuilder:FormBuilder ,public menuCtrl:MenuController,public navCtrl:NavController,public http:HTTP,public fb: FormBuilder,public alertCtrl:AlertController,public appCtrl:App){
    this.loginbox = this.formBuilder.group({
        //validate number field
        number :  ['',Validators.compose([Validators.required,Validators.minLength(10),Validators.maxLength(10), Validators.pattern('[0-9]*')])],   
             
    });
    this.menuCtrl.enable(false)
    
    }
    trueCaller($event){
        console.log(event)
        this.navCtrl.setRoot(HomePage);
    }
    //validation using by FromGroup,FormController
      //   public loginform = new FormGroup({
    //     number:new FormControl('',[
    //         Validators.required,
    //         Validators.pattern('[0-9]*')
    //     ]) 
    // });   

     showError(msg:string){
         let alert = this.alertCtrl.create({
            title:'Error',
            subTitle:msg,
            buttons:['ok']
         });
         alert.present();
     } 
            

     //Otp Login method
    dologin() {
    //add data and auth-id
        let data = {
            'authkey' :this.authKey ,
            'mobile': this.loginbox.controls.number.value,
    
        }
        let headers = new Headers();
        //use post method for call api and send OTP
        this.http.post("http://control.smsadverts.in/api/otp.php",data,headers).then((res:HTTPResponse) =>{
            this.responseData = res;
            console.log(res);
            localStorage.setItem('mobileData',JSON.stringify(this.responseData));
            this.navCtrl.push(OtpPage,{
                //post mobile number to otp.ts
                authkey:this.authKey,
                //get mobile number value
                mobileNumber : this.loginbox.controls.number.value
            });
        },(err) =>{
            console.log(err);
        })

        

        //   if(this.mobile_number === 13){
           
        //     this.showError('Enter Valid Number');
        //            }
        //   else{
        //     // this.appCtrl.getRootNav().push(HomePage)  
           
        //  }
      }
      extraMethod(){
          this.navCtrl.push(PaymentMethodPage)
      }
   
    }
   

    

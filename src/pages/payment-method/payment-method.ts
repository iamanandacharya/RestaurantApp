import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,MenuController } from 'ionic-angular';

import { SelectBankPage } from '../select-bank/select-bank';

/**
 * Generated class for the PaymentMethodPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-payment-method',
  templateUrl: 'payment-method.html',
})
export class PaymentMethodPage {
  public bank:boolean = false;
  constructor(public navCtrl: NavController,public menuCtrl:MenuController, public navParams: NavParams) {
 this.menuCtrl.enable(false)
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentMethodPage');
  }
  selectPayMethod(){
    this.navCtrl.push(SelectBankPage);
  }
  clickOption(){
    this.bank =true;
  }
  backToMain(){
    this.navCtrl.pop()
  }
}

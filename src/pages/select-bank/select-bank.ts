import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,MenuController } from 'ionic-angular';

/**
 * Generated class for the SelectBankPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-select-bank',
  templateUrl: 'select-bank.html',
})
export class SelectBankPage {

  

  constructor(public navCtrl: NavController,public menuCtrl:MenuController, public navParams: NavParams) {
    this.menuCtrl.enable(false)

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectBankPage');
  }
  selectBankMethod(){
    
  }
 
}

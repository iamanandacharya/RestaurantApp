import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,MenuController } from 'ionic-angular';
import { PaymentMethodPage } from '../payment-method/payment-method';
import {SubmenuPage} from '../submenu/submenu';


/**
 * Generated class for the ViewCartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view-cart',
  templateUrl: 'view-cart.html',
})
export class ViewCartPage {

  public currentNumber:number;
  public currentPrice:number = 120;
  public pizza_size:number;
  public crust:String;
  public total_price:number;

  public crust_2:any;
  public pizza_size_2:any;
 

  constructor(public navCtrl: NavController,public menuCtrl:MenuController, public navParams: NavParams) {
    this.menuCtrl.enable(false)
 
  }
 //get the value from crust , pizza size and currentNumber from submenu.ts

/*  runs when the page has been load.it calls only one time
 	Runs when the page has loaded.
 This event only happens once per page being created. 
If a page leaves but is cached, then this event will not fire again on a subsequent viewing. 
The ionViewDidLoad event is good place to put your setup code for the page.*/
  
ionViewDidLoad() {
    this.currentNumber = this.navParams.get('currentNumber');
    this.pizza_size = this.navParams.get('pizza_size');
    this.crust = this.navParams.get('crust');
    this.crust_2 =  this.navParams.get('crust_2');
    this.pizza_size_2 = this.navParams.get('pizza_size_2');

    this.currentPrice = this.currentNumber * this.currentPrice;
    this.total_price = this.currentPrice + 50;
   

  }
  /*Runs when the page is about to enter and become the active page. */
  ionViewWillEnter(){
    console.log('Ion View Will Enter');
  }
  //Runs when the page has fully entered and is now the active page. This event will fire, whether it was the first load or a cached page
  ionViewDidEnter(){
    console.log('Ion did enter')
  }
  //uns when the page is about to leave and no longer be the active page.
  ionViewWillLeave(){
    console.log('Ion View Will leave')
  }
  // 	Runs when the page has finished leaving and is no longer the active page.
  ionViewDidLeave(){
    console.log('Ion view did leave')
  }
  //ionViewWillUnload	void	Runs when the page is about to be destroyed and have its elements removed.
  ionViewWillUnload(){
   
    console.log('Ion view will Unload');
  }
  /*ionViewCanEnter	boolean/Promise<void>	Runs before the view can enter. 
  This can be used as a sort of "guard" 
  in authenticated views where you need to check permissions before the view can enter */
  ionViewCanEnter(){
    console.log('Ion view can enter')
  }
  /*ionViewCanLeave	boolean/Promise<void>	Runs before the view can leave. This can be used as a sort of 
  "guard" in authenticated views where you need to check permissions before the view can leave*/
  ionViewCanLeave(){
    console.log('Ion view can leave')
  }
  incrementNumber(){
    this.currentNumber++;
  }
  decrementNumber(){
    this.currentNumber--;

  }

  incrementPrice(){
    this.currentPrice++;
  }
decrementPrice(){
    this.currentPrice--;
}
backToMain(){
  this.navCtrl.setRoot(SubmenuPage)
}
paymnetMethod(){
  this.navCtrl.push(PaymentMethodPage)
}
}

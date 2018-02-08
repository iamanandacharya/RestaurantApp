import { Component } from '@angular/core';
import { IonicPage,MenuController, NavController, NavParams } from 'ionic-angular';
import {MenuPage} from '../menu/menu'

import { ViewCartPage } from '../view-cart/view-cart';
/**
 * Generated class for the SubmenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-submenu',
  templateUrl: 'submenu.html',
})
export class SubmenuPage {

  
  public checkStatus:boolean = true;
  public checkStatus1:boolean = true;
  public checkStatus2:boolean = true;
  public slides_checkStatus1:boolean =true;
  public drinks_checkStatus1:boolean =true;
  // when clicked it will be true
  public butoonClicked: boolean= false;
  public butoonClicked1: boolean = false;
  public butoonClicked2: boolean= false;
  public slides_butoon_clicked1:boolean = false;
  public drinks_butoon_clicked1:boolean=false;


  public closeButtonClicked = true;
  public currentNumber:any = 0;
  public food:string;

  public crust:any;
  public pizza_size:any;


  public crust_2:any;
  public pizza_size_2:any;

  constructor(public navCtrl: NavController,public menuCtrl:MenuController, public navParams: NavParams) {
    this.menuCtrl.enable(true,'menuId2')
    this.food = "pizza"
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SubmenuPage');
  }
  openArrowButton(){
  //for arrowbutton checkStatus when user click open menu arrow button then it show contents and it will hide 
    this.checkStatus = false;

    this.butoonClicked = true; 
  }
  openArrowButton1(){
    this.checkStatus1 = false;
    this.butoonClicked1 =true;

  }
  openArrowButton2(){
    this.checkStatus2 = false;
    this.butoonClicked2 =true;

  }

  slidesOpenArrowButton(){
    this.slides_checkStatus1 = false;
    this.slides_butoon_clicked1 =true;
  }

  drinksOpenArrowButton(){
    this.drinks_checkStatus1=false;
    this.drinks_butoon_clicked1=true;
  }


  closeMenu(){
  //when user click close menu button then it will hide contents and show upmenu button
    this.checkStatus = true;
    this.butoonClicked = false; 
  }
  closeMenu1(){
    this.checkStatus1 = true;
    this.butoonClicked1 = false;
  }

  closeMenu2(){
    //when user click close menu button then it will hide contents and show upmenu button
      this.checkStatus2 = true;
      this.butoonClicked2 = false; 
    }
    slidesCloseMenu(){
      this.slides_checkStatus1 = true;
      this.slides_butoon_clicked1 = false;
    }
    drinksCloseMenu(){
      this.drinks_checkStatus1 =true;
      this.drinks_butoon_clicked1=false;
    }
  //increment method when user click + button
  public increment(){
    this.currentNumber++;
  }
  public decrement(){
    this.currentNumber--;
  }
  viewCart(){
    this.navCtrl.push(ViewCartPage)
  }
  addToCart(){
    this.navCtrl.push(ViewCartPage,{
      crust:this.crust,
      pizza_size : this.pizza_size,
      currentNumber: this.currentNumber,
    })
  }
  addToCart2(){
    this.navCtrl.push(ViewCartPage,{
      crust:this.crust,
      pizza_size : this.pizza_size,
      currentNumber: this.currentNumber,
    })
  }
}

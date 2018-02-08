import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ViewCartPage } from '../view-cart/view-cart';
import { HomePage } from '../home/home';

/**
 * Generated class for the NewOfferPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-offer',
  templateUrl: 'new-offer.html',
})
export class NewOfferPage {
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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.food = "pizza"
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewOfferPage');
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
    backMenu(){
      this.navCtrl.setRoot(HomePage)
    }
}

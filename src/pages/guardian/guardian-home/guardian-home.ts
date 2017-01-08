import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';
import { GuardianDashboardPage } from '../guardian-dashboard/guardian-dashboard';
import { GuardianProfilePage } from '../guardian-profile/guardian-profile';

/*
  Generated class for the GuardianHome page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'guardian-home.html'
})
export class GuardianHomePage {
	  tab1Root: any;
  	tab2Root: any;

  	Username:'';

	constructor(public navCtrl: NavController, public navParams: NavParams) {
	    this.Username =  this.navParams.data;
	    this.tab1Root = GuardianDashboardPage;
	    this.tab2Root = GuardianProfilePage;
	}

  	ionViewDidLoad() {
    	console.log('ionViewDidLoad GuardianHomePage');
  	}

}

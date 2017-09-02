import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  test:string="vishnu";

  constructor(public navCtrl: NavController) {
   
  }

}

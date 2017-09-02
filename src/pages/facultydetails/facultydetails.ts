import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';



@Component({
  selector: 'page-facultydetails',
  templateUrl: 'facultydetails.html',
})
export class FacultydetailsPage {
  faculty:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.faculty = navParams.get('fac');
  }

  

}

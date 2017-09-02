import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { FacultydetailsPage } from '../facultydetails/facultydetails';
import {ServiceProvider} from '../../providers/service/service';
import {FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  school:string = "";
  faculty:FirebaseListObservable<any[]>;

  constructor(public navCtrl: NavController,public fbService:ServiceProvider) {
      this.faculty=this.fbService.getList();
      //console.log(this.facy);
  }

  itemTapped(event, fac) {
    this.navCtrl.push(FacultydetailsPage, {
      fac: fac
    });
  }

}

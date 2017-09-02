import { Injectable } from '@angular/core';
//import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class ServiceProvider {

  public faculty:any;

  constructor(public afDB: AngularFireDatabase) {
    
  }

  getList(){
    return this.afDB.list('/faculty/');
  }

}

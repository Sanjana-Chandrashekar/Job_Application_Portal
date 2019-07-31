import { Component } from '@angular/core';
import {NavController, ToastController} from '@ionic/angular';
import { saveConfig } from '@ionic/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
items:any;
  constructor(public navCtrl:NavController){
    this.items=[
      {item:'Web Developer', id:1},
      {item:'Software Engineer',id:2},
      {item:'Juinior Data Analyst',id:3},
    ];
    }
  

}




  
  


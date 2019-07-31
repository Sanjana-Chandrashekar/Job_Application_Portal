import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';



@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {

  constructor(
    public routing: ActivatedRoute,
    public alertController: AlertController
  ) { }

  jobID: any;

  ngOnInit() {
    this.jobID = this.routing.snapshot.paramMap.get('id');
    console.log(this.jobID);
  }

  async submit() {
    const alert = await this.alertController.create({
      header: 'Congratulations!',
      message: 'Application Submitted Successfully',
      buttons: ['OK']
    });

    await alert.present();
  }

}

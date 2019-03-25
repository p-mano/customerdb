import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,public alertController: AlertController) {}

  title = 'Login';
  data = {username:"",password:""};

  ngOnInit() {}
  doLogin(){
    if(this.data.username == this.data.password){
      this.router.navigate(['/dashboard']);
    }
    else{
      this.presentAlert();
    }
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Login Failed',
      message: 'please Enter Login Details',
      buttons: ['OK']
    });

    await alert.present();
  }
    

}

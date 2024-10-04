import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  usuario: string = '';
  contrasena: string = '';  
  showPassword: boolean = false; 

  canDismiss = false;

  presentingElement = null;

  constructor(private navCtrl: NavController,
              private alertCtrl: AlertController) {

  }

  ngOnInit() {
    
  }
  
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  validar() {
    if (this.contrasena === "1234") {
      localStorage.setItem('usuario', this.usuario);
      this.navCtrl.navigateForward(['/home']);
    } else {
      this.presentAlert();
    }
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Advertencia',
      subHeader: 'Fallo en el inicio de sesión',
      message: 'Usuario o contraseña incorrectos / no se encuentra registrado.',
      buttons: [
        {
          text: 'Volver a Intentar',
          role: 'cancel'
        },
        {
          text: 'Crear Cuenta',
          handler: () => {
            this.navCtrl.navigateForward(['/registro']);
          }
        }
      ]
    });

    await alert.present();
  }

}

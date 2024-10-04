import { Component, OnInit } from '@angular/core';
import { Viaje } from 'src/app/model/Viaje';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {
  alertButtons = ['Aceptar'];

  usuario:string=''

  lugarencuentro:string
  destino:string
  asiento:string
  fecha_hora:string
  arreglo:Viaje[]
  constructor(private navCtrl: NavController) { }

  ngOnInit() {
    this.usuario=localStorage.getItem("usuario") ??''
  }

  grabar(){
    let via:Viaje
    via=new Viaje()
    via.lugarencuentro=this.lugarencuentro
    via.destino=this.destino
    via.asiento=this.asiento
    via.fecha_hora=this.fecha_hora
    if (localStorage.getItem("viajes")) {
      this.arreglo=JSON.parse(localStorage.getItem("viajes") ??'')
    } else {
      this.arreglo=[]
    }
    this.arreglo.push(via)
    localStorage.setItem("viajes",JSON.stringify(this.arreglo))
    console.log("Guardado Correctamente")
  }

  retroceso(){
    this.navCtrl.back();
  }

}

import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { faHandPointDown } from '@fortawesome/free-solid-svg-icons';
import { Viaje } from 'src/app/model/Viaje';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {
  faHandPointDown=faHandPointDown;

  usuario: string = '';

  constructor(private menuCtrl: MenuController,
              private navCtrl: NavController
  ) {}

  lugarencuentro:string='mamam'
  destino:string='xsx'
  asiento:string='asas'
  fecha_hora:string='asas'
  arreglo:Viaje[]
  ngOnInit(): void {
    this.usuario = localStorage.getItem("usuario") ?? '',
    this.arreglo=JSON.parse(localStorage.getItem("viajes")??'')
  }

  unirseViaje(){
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
    console.log("Grabo")
  }

  
  

  abrirMenu(){
    this.menuCtrl.open('start')
  }

}

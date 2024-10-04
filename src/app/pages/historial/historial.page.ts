import { Component, OnInit } from '@angular/core';
import { Viaje } from 'src/app/model/Viaje';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.page.html',
  styleUrls: ['./historial.page.scss'],
})
export class HistorialPage implements OnInit {

  constructor(private NavCtrl:NavController) { }

 
  historial: Viaje[]=[];
  
  ngOnInit() {
    const historial = localStorage.getItem("historial");
    if (historial) {
      this.historial = JSON.parse(historial);
    }
  }

  eliminar_hist(){
    this.historial = [];

    localStorage.setItem("historial", JSON.stringify(this.historial));
  }


  retroceso(){
    this.NavCtrl.back();
  }

}

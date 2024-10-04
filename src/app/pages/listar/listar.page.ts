import { Component, OnInit, ElementRef, ViewChildren, ViewChild } from '@angular/core';
import { Viaje } from 'src/app/model/Viaje';
import { NavController, AnimationController, IonItem, IonCard } from '@ionic/angular';
import type { QueryList } from '@angular/core';
import type { Animation, IonModal } from '@ionic/angular';


@Component({
  selector: 'app-listar',
  templateUrl: './listar.page.html',
  styleUrls: ['./listar.page.scss'],
})
export class ListarPage implements OnInit {
  @ViewChild('modal', { static: false }) modal: IonModal;
  @ViewChildren(IonCard, { read: ElementRef }) cards: QueryList<ElementRef<HTMLIonCardElement>>;
  private animations: Animation[]=[];


  constructor(private navCtrl: NavController,
              private aniCtrl: AnimationController
  ) { }

  
  arreglo: Viaje[] = [];
  historial: Viaje[]=[];

  ngOnInit() {
    const storedViajes = localStorage.getItem("viajes");
    const historial = localStorage.getItem("historial");

    if (storedViajes) {
      this.arreglo = JSON.parse(storedViajes);
    } else {
      this.arreglo = [];
    }

    if (historial) {
      this.historial = JSON.parse(historial);
    } else {
      this.historial = []; 
    }



   
  }


  ngAfterViewInit() {
    this.cards.forEach((card, index) => {
      const animation = this.aniCtrl
        .create()
        .addElement(card.nativeElement)
        .duration(1500)
        .iterations(1)
        .fromTo('transform', 'translateX(0px)', 'translateX(400px)')
        .fromTo('opacity', '1', '0.2');

      this.animations.push(animation);
    });
  }

  eliminar(index: number) {
    const viajeEliminado = this.arreglo[index];
    if (this.animations[index]) {

      this.animations[index].play().then(() => {
        
        this.historial.push(viajeEliminado);
        this.arreglo.splice(index, 1);

        localStorage.setItem("viajes", JSON.stringify(this.arreglo));
        localStorage.setItem("historial", JSON.stringify(this.historial));
      });
    } else {
      
      this.historial.push(viajeEliminado)
      this.arreglo.splice(index, 1);

      localStorage.setItem("viajes", JSON.stringify(this.arreglo));
      localStorage.setItem("historial", JSON.stringify(this.historial));
    }
  }


  closeModal() {
    this.modal.dismiss();
  }

  retroceso(){
    this.navCtrl.back();
  }
  

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Unirme2PageRoutingModule } from './unirme2-routing.module';

import { Unirme2Page } from './unirme2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Unirme2PageRoutingModule
  ],
  declarations: [Unirme2Page]
})
export class Unirme2PageModule {}

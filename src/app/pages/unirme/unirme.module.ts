import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UnirmePageRoutingModule } from './unirme-routing.module';

import { UnirmePage } from './unirme.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UnirmePageRoutingModule
  ],
  declarations: [UnirmePage]
})
export class UnirmePageModule {}

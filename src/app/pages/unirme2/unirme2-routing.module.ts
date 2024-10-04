import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Unirme2Page } from './unirme2.page';

const routes: Routes = [
  {
    path: '',
    component: Unirme2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Unirme2PageRoutingModule {}

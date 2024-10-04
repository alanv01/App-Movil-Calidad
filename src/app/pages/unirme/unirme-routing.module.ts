import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnirmePage } from './unirme.page';

const routes: Routes = [
  {
    path: '',
    component: UnirmePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnirmePageRoutingModule {}

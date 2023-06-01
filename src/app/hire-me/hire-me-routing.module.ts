import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HireMePage } from './hire-me.page';

const routes: Routes = [
  {
    path: '',
    component: HireMePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HireMePageRoutingModule {}

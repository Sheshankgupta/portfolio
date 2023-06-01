import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HireMePageRoutingModule } from './hire-me-routing.module';

import { HireMePage } from './hire-me.page';
import { FooterPageModule } from '../footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HireMePageRoutingModule,
    FooterPageModule,
  ],
  declarations: [HireMePage],
})
export class HireMePageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrutalRoutingModule } from './frutal-routing.module';
import { KiwiComponent } from './kiwi/kiwi.component';
import { MelocotonComponent } from './melocoton/melocoton.component';
import { PapayaComponent } from './papaya/papaya.component';


@NgModule({
  declarations: [
    KiwiComponent,
    MelocotonComponent,
    PapayaComponent
  ],
  imports: [
    CommonModule,
    FrutalRoutingModule
  ]
})
export class FrutalModule { }

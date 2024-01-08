import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HortalizaRoutingModule } from './hortaliza-routing.module';
import { LechugaComponent } from './lechuga/lechuga.component';
import { PepinoComponent } from './pepino/pepino.component';
import { PatataComponent } from './patata/patata.component';


@NgModule({
  declarations: [
    LechugaComponent,
    PepinoComponent,
    PatataComponent
  ],
  imports: [
    CommonModule,
    HortalizaRoutingModule
  ]
})
export class HortalizaModule { }

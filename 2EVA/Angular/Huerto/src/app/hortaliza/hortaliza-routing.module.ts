import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LechugaComponent } from './lechuga/lechuga.component';
import { PatataComponent } from './patata/patata.component';
import { PepinoComponent } from './pepino/pepino.component';

const routes: Routes = [
  {
    path: 'lechuga',
    component: LechugaComponent
  },
  {
    path: 'patata',
    component: PatataComponent
  },
  {
    path: 'pepino',
    component: PepinoComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HortalizaRoutingModule { }

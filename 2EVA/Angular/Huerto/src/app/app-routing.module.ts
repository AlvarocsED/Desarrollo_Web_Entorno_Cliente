import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AromaticasComponent } from './aromaticas/aromaticas.component';
import { FrutalComponent } from './frutal/frutal.component';
import { HortalizaComponent } from './hortaliza/hortaliza.component';

const routes: Routes = [

  {
    path: 'hortaliza',
    component: HortalizaComponent,
    loadChildren: () => import('./hortaliza/hortaliza.module').then(m => m.HortalizaModule)
  },
  {
    path: 'frutal',
    component: FrutalComponent,
    loadChildren: () => import('./frutal/frutal.module').then(m => m.FrutalModule)
  },
  {
    path: 'aromaticas',
    component: AromaticasComponent,
    loadChildren: () => import('./aromaticas/aromaticas.module').then(m => m.AromaticasModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

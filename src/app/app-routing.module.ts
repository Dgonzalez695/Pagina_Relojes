import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RelojesComponent } from './Relojes/pages/relojes/relojes.component';
import { DetallesRelojComponent } from './Relojes/pages/detalles-reloj/detalles-reloj.component';

const routes: Routes = [
  {
    path: '',
    component: RelojesComponent,
    pathMatch: 'full',
  },
  {
    path: 'detallesreloj',
    component: DetallesRelojComponent,
  },
  {
    path: 'categoria/:categ',
    component: RelojesComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule {}

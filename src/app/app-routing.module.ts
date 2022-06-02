import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RelojesComponent } from './Relojes/pages/relojes/relojes.component';
import { DetallesRelojComponent } from './Relojes/pages/detalles-reloj/detalles-reloj.component';
import { CategoriaComponent } from './Relojes/pages/categoria/categoria.component';

const routes: Routes = [
  {
    path: 'relojes',
    component: RelojesComponent,
    pathMatch: 'full',
  },
  {
    path: 'detallesreloj',
    component: DetallesRelojComponent,
  },
  {
    path: 'relojes/categoria/:categ',
    component: CategoriaComponent,
  },
  {
    path: '**',
    redirectTo: 'relojes',
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

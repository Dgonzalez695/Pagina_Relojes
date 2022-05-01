import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RelojesComponent } from './Relojes/pages/relojes/relojes.component';
import { CategoriaComponent } from './Relojes/pages/categoria/categoria.component';
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
    component: CategoriaComponent,
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

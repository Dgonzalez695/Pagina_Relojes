import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetallesRelojComponent } from './Relojes/components/detalles-reloj/detalles-reloj.component';
import { RelojesComponent } from './Relojes/components/relojes/relojes.component';
import { CategoriaComponent } from './Relojes/pages/categoria/categoria.component';

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
    path: 'categoria',
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

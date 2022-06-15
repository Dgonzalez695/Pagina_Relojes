import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RelojesComponent } from './pages/relojes/relojes.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { CategoriaComponent } from './pages/categoria/categoria.component';
import { DetallesRelojComponent } from './pages/detalles-reloj/detalles-reloj.component';



@NgModule({
  declarations: [
    DetallesRelojComponent,
    RelojesComponent,
    CategoriaComponent,
  ],
  exports: [
    DetallesRelojComponent,
    RelojesComponent,
    CategoriaComponent,
  ],

  imports: [
    CommonModule,
    AppRoutingModule,
    RouterModule
  ]
})
export class RelojesModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetallesRelojComponent } from './components/detalles-reloj/detalles-reloj.component';
import { RelojesComponent } from './components/relojes/relojes.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { CategoriaComponent } from './pages/categoria/categoria.component';



@NgModule({
  declarations: [
    DetallesRelojComponent,
    RelojesComponent,
    CategoriaComponent
  ],
  exports: [
    DetallesRelojComponent,
    RelojesComponent
  ],

  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class RelojesModule { }

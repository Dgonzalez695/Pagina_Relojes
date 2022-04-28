import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetallesRelojComponent } from './components/detalles-reloj/detalles-reloj.component';
import { RelojesComponent } from './components/relojes/relojes.component';



@NgModule({
  declarations: [
    DetallesRelojComponent,
    RelojesComponent
  ],
  exports: [
    DetallesRelojComponent,
    RelojesComponent
  ],

  imports: [
    CommonModule
  ]
})
export class RelojesModule { }

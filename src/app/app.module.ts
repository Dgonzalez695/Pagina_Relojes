import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { RelojesComponent } from './Relojes/components/relojes/relojes.component';
import { DetallesRelojComponent } from './Relojes/components/detalles-reloj/detalles-reloj.component';
import { RelojesModule } from './Relojes/relojes.module';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RelojesModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

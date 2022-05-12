import { Component, OnInit } from '@angular/core';
import { categorias } from 'src/app/Relojes/interfaces/categorias.interface';
import { RelojesService } from 'src/app/Relojes/services/relojes.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  constructor(private _servicesCategorias: RelojesService) {}

  get categorias() {
    return this._servicesCategorias.categorias;
  }
}

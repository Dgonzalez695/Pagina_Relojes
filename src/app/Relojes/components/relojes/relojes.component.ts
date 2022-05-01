import { Component, OnInit } from '@angular/core';
import { productos } from '../../interfaces/productos.interface';
import { RelojesService } from '../../services/relojes.service';

@Component({
  selector: 'app-relojes',
  templateUrl: './relojes.component.html',
  styleUrls: ['./relojes.component.css'],
})
export class RelojesComponent {
  constructor(private _servicesRelojes: RelojesService) {}



  get productos() {
    return this._servicesRelojes.productos;
  }
}

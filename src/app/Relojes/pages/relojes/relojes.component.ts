import { Component, OnInit } from '@angular/core';
import { RelojesService } from 'src/app/Relojes/services/relojes.service';


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

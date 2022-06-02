import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RelojesService } from 'src/app/Relojes/services/relojes.service';
import { categorias } from '../../interfaces/categorias.interface';
import { productos } from '../../interfaces/productos.interface';

@Component({
  selector: 'app-relojes',
  templateUrl: './relojes.component.html',
  styleUrls: ['./relojes.component.css'],
})
export class RelojesComponent {


  constructor(private router: Router,private _servicesRelojes: RelojesService) {
   
}


  get productos(){
   return this._servicesRelojes.productos;
  }



}

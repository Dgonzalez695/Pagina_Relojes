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
  productosMostrar: productos[] = [];
  itemCategoria!: number;

  constructor(
    private _servicesRelojes: RelojesService,
    private route: Router,
    private router: ActivatedRoute
  ) {
    this.buscarProductos();
  }
  get productos() {
    return this._servicesRelojes.productos;
  }

  get categorias() {
    return this._servicesRelojes.categorias;
  }

  ngDoCheck() {
    if (
      this.itemCategoria !== Number(this.router.snapshot.paramMap.get('categ'))
    ) {
      this.buscarProductos();
    }
  }

  buscarProductos() {
    this.itemCategoria = Number(this.router.snapshot.paramMap.get('categ'));
    this.productosMostrar.length = 0;
    for (var item of this.productos) {
      console.log('entre');
      if (item.categoria == this.itemCategoria) {
        console.log(item);
        this.productosMostrar.push(item);
      }
    }
  }
}

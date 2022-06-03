import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { productos } from '../../interfaces/productos.interface';
import { RelojesService } from '../../services/relojes.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css'],
})
export class CategoriaComponent implements OnInit {
  productosMostrar: productos[] = [];
  itemCategoria!: number;

  constructor(
    private _servicesRelojes: RelojesService,
    private route: Router,
    private router: ActivatedRoute
  ) {
    // debugger
  }

  //Ejecutando el metodo para obtener los relojes ya filtrados por categoria
  ngOnInit() {
    this.router.paramMap.subscribe(params => {
      this.itemCategoria = parseInt(params.get("categ") + "" );
      this._servicesRelojes.getProducto(this.itemCategoria);
    });
  }

  // Trayendo datos del service
  get getproductos() {
    return this._servicesRelojes.producto;
  }

  get categorias() {
    return this._servicesRelojes.categorias;
  }


}


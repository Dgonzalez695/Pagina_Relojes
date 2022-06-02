import { Injectable } from '@angular/core';
import { productos } from '../interfaces/productos.interface';
import { categorias } from '../interfaces/categorias.interface';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RelojesService {
  itemCategoria!: number;
  private _producto: productos[] = []
  private _categorias: categorias[] = [];
  private _productos: productos[] = [];

  get producto(): productos[] {
    return [...this._producto];
  }

  get categorias(): categorias[] {
    return [...this._categorias];
  }

  get productos(): productos[]{
    return [...this._productos];
  }

  constructor(private http: HttpClient, private route: Router, private router: ActivatedRoute) {
  this.obtenerCategorias();
  // this.obtenerProductos();
  this.getProductos();
  // this.getProducto(5);
}



  // Se obtiene la lista de categorias para el sidebar
  obtenerCategorias() {
    this.http
      .get('https://localhost:44300/api/Categorias')
      .subscribe((resp: any) => {
        // console.log(resp)
        this._categorias = resp;
      });
  }

  getProducto( categoriaId : number){
    this.http.get(`https://localhost:44300/api/Productos/CategoriaId?categoriaId=${categoriaId}`)
    .subscribe((resp: any) => {
      this._producto = resp;
      console.log(resp)
      // console.log(categoriaId);
      // console.log(resp);
    })
 }

 getProductos(){
   this.http.get('https://localhost:44300/api/Productos')
   .subscribe((resp: any) => {
     this._productos = resp;
    //  console.log(resp);
  //  console.log(this._productos1)
   })
 }


}

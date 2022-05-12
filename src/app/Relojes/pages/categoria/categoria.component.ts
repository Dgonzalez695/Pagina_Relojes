import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RelojesService } from '../../services/relojes.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css'],
})
export class CategoriaComponent{

  itemCategoria : string = '';
  constructor(private services: RelojesService, private route: Router, private router: ActivatedRoute) {}

  ngDoCheck(){
    if (this.itemCategoria !== this.router.snapshot.paramMap.get('categ')!.toString()) {
     this.mostrarCategoria();
    }
  }

  mostrarCategoria(){
    this.itemCategoria = this.router.snapshot.paramMap.get('categ')!.toString()
    // console.log(this.itemCategoria)
  }


  get categorias() {
    return this.services.categorias;
  }


}

import { Component, OnInit } from '@angular/core';
import { RelojesService } from '../../services/relojes.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent{


  constructor( private services : RelojesService) { }

  get categorias(){
    return this.services.categorias
  }

  mostrarCategoria( categoria : string ){

  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-relojes',
  templateUrl: './relojes.component.html',
  styleUrls: ['./relojes.component.css']
})
export class RelojesComponent{

  constructor() { }

  Lista:string[]=["casio","kosmo","g-force","current","T5"];

}

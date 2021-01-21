import { Component, OnInit } from '@angular/core';
import { BarberiasService } from '../../servicios/barberias.service';


@Component({
  selector: 'app-barberias',
  templateUrl: './barberias.component.html',
  styleUrls: ['./barberias.component.css']
})
export class BarberiasComponent {

  allBarberias: any[] = []; 

  constructor( private barberias: BarberiasService ) {

    this.barberias.getBarberias().subscribe( (data:any) => {
        this.allBarberias = data.features;
    });

   }

}

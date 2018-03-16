import { Component, OnInit, Input } from '@angular/core';
import {Producto} from '../../model/producto';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})

export class ProductosComponent implements OnInit {
//Parametros de entrada desde el Padre al Hijo
@Input('producto') producto: Producto; //Producto a mostrar

  constructor() { 
    console.log('ProductosComponent constructor');
  }

  ngOnInit() {
    console.log('ProductosComponent ngOnInit');
  }


}

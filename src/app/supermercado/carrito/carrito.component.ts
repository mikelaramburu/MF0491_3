import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../providers/productos.service';
import { Producto } from '../../model/producto';
import {SupermercadoComponent} from '../../supermercado/supermercado.component';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {
  carro = [];
  constructor() { 
    this.carro=[];
  }

  ngOnInit() {
  }





}

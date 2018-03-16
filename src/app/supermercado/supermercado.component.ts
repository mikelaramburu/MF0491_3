import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import {Producto} from '../model/producto';
import {ProductosService} from '../providers/productos.service';

@Component({
  selector: 'app-supermercado',
  templateUrl: './supermercado.component.html',
  styleUrls: ['./supermercado.component.scss']
})
export class SupermercadoComponent implements OnInit {

  stock : Array<Producto>; //Cast al Producto
  producto: Producto;
  


  constructor(public productosService:ProductosService) {
    
    console.log('SupermercadoComponent constructor');

    this.producto = new Producto('producto',1,"");
    this.stock = new Array<Producto>();

   }

  ngOnInit() {
    console.log('SupermercadoComponent ngOnInit');
    this.stock = this.productosService.getProductos();
  }

  recibirProducto(event){
    console.log('SupermercadoComponent: recibirProducto %o', event.producto);
   
    this.producto=event.producto;

  }

}

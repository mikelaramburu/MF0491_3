import { Injectable } from '@angular/core';
import { Producto } from '../model/producto';

import { element } from 'protractor';
import { MOCKS_PRODUCTOS } from './mock.productos';

@Injectable()
export class ProductosService {

  //Inicializar array
  productos: Producto[];

  constructor() {
    console.log('ProductosService constructor');
    this.productos= [];
   }

   //Retorna todos los productos que tenemos en Stock
   getProductos():Producto[]{
    console.log('ProductosService getProductos');
    this.productos = [];
    let producto;
    let jsonData = JSON.parse(MOCKS_PRODUCTOS.stock);

    jsonData.forEach(element => {   
      
        producto = new Producto(
                                element.nombre,
                                element.foto, 
                                element.oferta,
                                element.precio,
                                element.precioUnidad,
                                element.precioConOferta,
                                element.cantidad                              
                                );

        this.productos.push(producto);
    });
   
    return this.productos;
    }

    put (producto:Producto){
      console.log('ProductosService');
      this.productos.unshift(producto);
    }
  }

import { Component, OnInit } from '@angular/core';
import { Producto } from '../model/producto';
import { ProductosService } from '../providers/productos.service';


@Component({
  selector: 'app-supermercado',
  templateUrl: './supermercado.component.html',
  styleUrls: ['./supermercado.component.scss']
})
export class SupermercadoComponent implements OnInit {

  stock: Array<Producto>; //Cast al Producto  
  producto: Producto;
  carro = [];
  totalProductos: number;
  sumaPrecio: number;

  //Campo del filtro
  searchText: string;

  constructor(public productosService: ProductosService) {
    console.log('SupermercadoComponent constructor');

    this.producto = new Producto("", "", false, 0, "", 0, 1);
    this.stock = new Array<Producto>();
    this.totalProductos = 0;
    this.sumaPrecio = 0;

  }

  ngOnInit() {
    console.log('SupermercadoComponent ngOnInit');
    this.stock = this.productosService.getProductos();
  }

  recibirProducto(event) {
    console.log('SupermercadoComponent: recibirProducto %o', event.producto);
    this.producto = event.producto;
  }

  sumar(producto) {
    producto.cantidad++;
    console.log('producto %o', producto.cantidad);
  }

  restar(producto){
    
    if (producto.cantidad >1){
      producto.cantidad--;
    }else{
      producto.cantidad=1
    }
   
    
    console.log('producto %o', producto.cantidad);
  }

  añadirProducto(producto) {
    console.log('producto %o', producto.cantidad);
    //let i =new Producto();
    this.carro.forEach(i => {
      if (i.id == producto.id) {
        i.cantidad = i.cantidad + producto.cantidad;
      }
    });

    this.sumaTotal();
    producto.cantidad = 1;
    console.log('carro %o', this.carro);
  }

  sumaTotal() {
    this.totalProductos = 0;
    this.sumaPrecio = 0;
    let precioOferta = 0;
    this.carro.forEach(i => {
      this.totalProductos += i.cantidad;
      this.sumaPrecio += parseFloat((i.precio * i.cantidad).toFixed(2));
    });
  }

}



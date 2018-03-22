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
  precioRebajado: number;
  totalProductos: number;
  sumaPrecio: number;

  //Campo del filtro
  searchText: string;


  constructor(public productosService: ProductosService) {
    console.log('SupermercadoComponent constructor');

    this.stock = new Array<Producto>();
    this.producto = new Producto(); //Valores por defecto del constructror sobre un producto
    this.carro = []; //inicialización de array vacio para ir sumando los productos añadidos
    this.totalProductos = 0;
    this.sumaPrecio = 0;

  }

  ngOnInit() {
    console.log('SupermercadoComponent ngOnInit');
    this.stock = this.productosService.getProductos();
  }

  //Funcion para recibir productos desde el mock al componente
  recibirProducto(event) {
    console.log('SupermercadoComponent: recibirProducto %o', event.producto);
    this.producto = event.producto;
  }

  //Sumar cantidad en el catalogo
  sumar(producto) {
    producto.cantidad++;
    console.log('producto %o', producto.cantidad);
  }

  //Restar cantidad en el catalogo
  restar(producto) {
    if (producto.cantidad > 1) {
      producto.cantidad--;
    } else {
      producto.cantidad = 1
    }
    console.log('producto %o', producto.cantidad);
  }

  //Funcion para añadir producto desde el catalogo al carro
  anadirProducto(producto) {
    console.log('producto %o', producto.cantidad);

    let anadido: boolean = false;
    this.carro.forEach(p => {
      if (producto.nombre == p.nombre) {
        p.cantidad += p.cantidad + producto.cantidad;
        anadido = true
      }
    });

    if (!anadido) {
      this.nuevoProducto(producto);
    }

    this.sumaTotal();
    producto.cantidad = 1;
    console.log('carro %o', this.carro);
  }

  //Pintado del producto en el carrito
  nuevoProducto(producto) {
    let prodNuevo = new Producto();
    prodNuevo.nombre = producto.nombre;
    prodNuevo.foto = producto.foto;
    prodNuevo.oferta = producto.oferta;
    prodNuevo.cantidad = producto.cantidad;
    prodNuevo.precio = producto.precio;
    prodNuevo.precioUnidad = producto.precioUnitario;
    prodNuevo.precioConOferta = producto.precioConOferta;

    this.carro.push(prodNuevo);
  }

  //Calculo de precio total segun productos añadidos
  sumaTotal() {
    this.totalProductos = 0;
    this.sumaPrecio = 0;
    let precioConOferta = 0;
    this.carro.forEach(producto => {
      this.totalProductos += producto.cantidad;
      this.sumaPrecio += parseFloat((producto.precio * producto.cantidad).toFixed(2));
    });
  }


  //Metodo para restar cantidad del producto dentro del carrito
  restarCarro(producto) {
    producto.cantidad--;
    if (producto.cantidad <= 0) {
      this.eliminarProducto(producto);
    }
    
  }

  //Metodo para eliminar producto del carrito
  eliminarProducto(producto) {
    this.carro = this.carro.filter(p => {
      return (p.nombre != producto.nombre);
    });
    this.sumaTotal();
  }

  //Metodo para vaciar todo el listado del carrito
  vaciarCarro() {
    this.carro = [];
    this.totalProductos=0;
    this.sumaPrecio=0;
    
  }
  
}



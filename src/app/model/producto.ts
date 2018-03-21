
//Modelo de la clase producto
export class Producto {
    nombre: string;
    foto: string;
    oferta: boolean;
    precio: number;
    precioUnidad: string;
    precioConOferta: number;
    cantidad: number;

    //constructor sin valores asignados
    constructor() {
        console.log('Producto class constructor');

        this.nombre='Producto desconocido';
        this.foto='assets/img/default_product.png';
        this.precio=0;
        this.precioUnidad='0€/unidad';
        this.oferta=false;
        this.cantidad=1;
    }
    
    
    //constructor con valores asignados
    /*constructor(
                nombre: string,
                foto: string,
                oferta: boolean,
                precio: number,
                precioUnidad: string,
                precioConOferta: number,
                cantidad: number
                ){
                    console.log("Constructor Producto");
                    this.nombre = nombre;
                        if (foto) {
                            this.foto = foto;
                        } else {
                            this.foto = 'assets/img/default_product.png';
                        }
                    this.oferta = oferta;
                    this.precio = precio;
                    this.precioUnidad = precioUnidad;
                    this.precioConOferta = precioConOferta;
                        if (oferta) {
                            this.precioConOferta = precioConOferta
                        }
                        else {
                            this.precioConOferta = precio;
                        }
                    this.cantidad = 1;
                }*/

}

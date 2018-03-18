
//Modelo de la clase producto
export class Producto {
    nombre: string;
    foto: string;
    oferta: boolean;
    precio: number;
    precioUnidad: string;
    precioConOferta: number;
    cantidad: number;

    constructor(
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
                }

}

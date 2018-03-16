
//Modelo de la clase producto
export class Producto{
    nombre:string;
    precio:number;
    peso:string;
    foto:string;
    oferta:boolean;

    constructor(nombre:string, precio:number, peso:string,foto?:string,){
            console.log("Constructor Producto");
            this.nombre=nombre;
            this.precio=precio;
            this.peso=peso;
            if ( foto ){
                this.foto = foto;
            }else{
                this.foto = 'assets/img/default_product.png';
            }               
            this.oferta=false; //por defecto el producto no estara en oferta
          
        }
        
    }

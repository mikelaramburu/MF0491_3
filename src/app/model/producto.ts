
//Modelo de la clase producto
export class Producto{
    nombre:string;
    precio:number;
    peso:string;
    foto:string;
    oferta:boolean;

    constructor(){
        {     
            console.log("Constructor Producto");
            this.nombre="";
            this.precio=0;
            this.peso="";
            this.foto="assets/img/default_product.png";
            this.oferta=false; //por defecto el producto no estara en oferta
          
        }
        
    }
}
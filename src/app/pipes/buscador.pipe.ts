import { Pipe, PipeTransform } from '@angular/core';
import { Producto } from '../model/producto';

@Pipe({
  name: 'buscadorProductos'
})

export class BuscadorPipe implements PipeTransform {

  transform(
            productos: Producto[],
            searchText: string

            ): Producto[] {

    if (!productos) return [];
    console.log("buscadorProductos: \\nsearchText=%s", searchText)

    let productosResultado = productos.slice();

    //Filtro por nombre  
    if (!searchText) {
      return productosResultado;
    }

    searchText = searchText.toLowerCase();
    let busqueda = "";
    return productosResultado.filter(it => {
      busqueda = it.nombre + " ";
      busqueda = busqueda.toLowerCase();
      return busqueda.includes(searchText);
    });
  }
}



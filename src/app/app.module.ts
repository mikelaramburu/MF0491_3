import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ProductoComponent } from './supermercado/producto/producto.component';
import { SupermercadoComponent } from './supermercado/supermercado.component';
import { ProductosComponent } from './supermercado/productos/productos.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductoComponent,
    SupermercadoComponent,
    ProductosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

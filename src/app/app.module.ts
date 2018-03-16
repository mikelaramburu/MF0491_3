import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Servicios
import {ProductosService} from './providers/productos.service';


//Componentes
import { AppComponent } from './app.component';
import { SupermercadoComponent } from './supermercado/supermercado.component';
import { ProductosComponent } from './supermercado/productos/productos.component';


@NgModule({
  declarations: [
    AppComponent,
    SupermercadoComponent,
    ProductosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ProductosService,
    

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

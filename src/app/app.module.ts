
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Servicios
import {ProductosService} from './providers/productos.service';


//Componentes
import { AppComponent } from './app.component';
import { SupermercadoComponent } from './supermercado/supermercado.component';

//Pipes
import { BuscadorPipe } from './pipes/buscador.pipe';
//import { CarritoComponent } from './supermercado/carrito/carrito.component';


@NgModule({
  declarations: [
    AppComponent,
    SupermercadoComponent,
    BuscadorPipe,
   // CarritoComponent
    
  ],
  
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],

  providers: [ProductosService],  
  bootstrap: [AppComponent]
})
export class AppModule { }

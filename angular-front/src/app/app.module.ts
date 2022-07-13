import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
 
import { HttpClientModule } from '@angular/common/http';
import { InicioComponent } from './inicio/inicio.component';
 
import { FormsModule } from '@angular/forms';
import { ListarActividadesComponent } from './listar-actividades/listar-actividades.component';
import { CrearActividadesComponent } from './crear-actividades/crear-actividades.component';
import { ModificarActividadesComponent } from './modificar-actividades/modificar-actividades.component';
import { EliminarActividadesComponent } from './eliminar-actividades/eliminar-actividades.component';

@NgModule({
  declarations: [
    AppComponent,
  
    InicioComponent,
 
    ListarActividadesComponent,
    CrearActividadesComponent,
    ModificarActividadesComponent,
    EliminarActividadesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

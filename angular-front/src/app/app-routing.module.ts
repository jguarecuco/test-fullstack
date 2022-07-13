import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearActividadesComponent } from './crear-actividades/crear-actividades.component';
 
import { ListarActividadesComponent } from './listar-actividades/listar-actividades.component';
import { ModificarActividadesComponent } from './modificar-actividades/modificar-actividades.component';
 

const routes: Routes = [
 
  { path: 'lista-actividad',component: ListarActividadesComponent},
  { path: '', redirectTo: 'lista-actividad', pathMatch: 'full' },
  { path: 'nueva-actividad', component: CrearActividadesComponent },
  {path : 'actualizar-actividad/:id',component : ModificarActividadesComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Actividad } from './actividad';

@Injectable({
  providedIn: 'root'
})
export class ActividadesService {

  private baseUrl = 'http://localhost:8080/api/v1/actividades';
  constructor(private httpClient: HttpClient) {}

  obteneractividades(): Observable<Actividad[]> {
    return this.httpClient.get<Actividad[]>(`${this.baseUrl}`);
  }
    //este metodo nos sirve para registrar un actividad
    registrarActividad(actividad:Actividad) : Observable<Object>{
      return this.httpClient.post(`${this.baseUrl}`,actividad);
    }
  
    //este metodo sirve para actualizar el actividad
    actualizarActividad(id:number,actividad:Actividad) : Observable<Object>{
      return this.httpClient.put(`${this.baseUrl}/${id}`,actividad);
    }
  
    //este metodo sirve para obtener o buscar un actividad
    obtenerActividadPorId(id:number):Observable<Actividad>{
      return this.httpClient.get<Actividad>(`${this.baseUrl}/${id}`);
    }
  
    eliminarActividad(id:number): Observable<Object>{
      return this.httpClient.delete(`${this.baseUrl}/${id}`);
    }
}

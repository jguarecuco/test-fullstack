import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Empleado from './empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {
  private baseUrl = 'http://localhost:8080/api/v1/empleados';
  constructor(private httpClient: HttpClient) {}

  obtenerEmpleados(): Observable<Empleado[]> {
    return this.httpClient.get<Empleado[]>(`${this.baseUrl}`);
  }

}

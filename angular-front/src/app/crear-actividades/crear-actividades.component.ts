import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { Actividad } from '../actividad';
import { ActividadesService } from '../actividades.service';

@Component({
  selector: 'app-crear-actividades',
  templateUrl: './crear-actividades.component.html',
  styleUrls: ['./crear-actividades.component.css']
})
export class CrearActividadesComponent implements OnInit {
  actividad: Actividad = new Actividad();
  constructor(private actividadesServicio:ActividadesService,private router:Router) { }
  estados: string[] = ['Pendiente', 'Realizada'];
  empleados:string[] = ['Juan','Pedro','Maria','Juana','Jorge','Juanito'];
  ngOnInit(): void {
  }
  guardarActividad(){
    this.actividadesServicio.registrarActividad(this.actividad).subscribe(dato => {
      console.log(dato);
      this.irALaListaDeActividades();
    },error => console.log(error));
  }

  irALaListaDeActividades(){
    this.router.navigate(['/lista-actividad']);
    swal('Actividad registrada',`La actividad ${this.actividad.nombre} ha sido registrada con exito`,`success`);
  }

  onTimestamp(event: any) {
    this.actividad.timestamp = Math.round(new Date(event.target.value).getTime()/1000); 
  }
  updateObj(event:any){
    this.actividad.estado = event.target.value;
  }
  updateObj1(event:any){
    this.actividad.empleado = event.target.value;
  }
  onSubmit(){
    this.guardarActividad();
  }

}

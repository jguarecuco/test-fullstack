import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert2';
import { Actividad } from '../actividad';
import { ActividadesService } from '../actividades.service';

@Component({
  selector: 'app-modificar-actividades',
  templateUrl: './modificar-actividades.component.html',
  styleUrls: ['./modificar-actividades.component.css']
})
export class ModificarActividadesComponent implements OnInit {
  actividad:Actividad = new Actividad();
  id:number;
  estados: string[] = ['Pendiente', 'Realizada'];
  empleados:string[] = ['Juan','Pedro','Maria','Juana','Jorge','Juanito'];
  date: Date = new Date();
  constructor(private actividadesServicio:ActividadesService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.actividadesServicio.obtenerActividadPorId(this.id).subscribe(dato =>{
      this.date =new Date(dato.timestamp * 1000)
      this.actividad = dato;

    },error => console.log(error));
  }

  guardarActividad(){
    this.actividadesServicio.actualizarActividad(this.id,this.actividad).subscribe(dato => {
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

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { Actividad } from '../actividad';
import { ActividadesService } from '../actividades.service';

@Component({
  selector: 'app-listar-actividades',
  templateUrl: './listar-actividades.component.html',
  styleUrls: ['./listar-actividades.component.css']
})
export class ListarActividadesComponent implements OnInit {

  actividades: Actividad[];
  actividadServicio: any;
  constructor(private actividadesServicio: ActividadesService,private router:Router) { }

  ngOnInit(): void {
this.obtenerActividades();
  }

  obtenerActividades(){
    this.actividadesServicio.obteneractividades().subscribe(
      (actividades) => {
        this.actividades = actividades;
      })
  }
  getDate(date: number) {
    return new Date(date* 1000).toLocaleString();
  }
  actualizarActividad(id:number){
    this.router.navigate(['actualizar-actividad',id]);
  }
  eliminarActividad(id:number){
    swal({
      title: '¿Estas seguro?',
      text: "Confirma si deseas eliminar al empleado",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si , elimínalo',
      cancelButtonText: 'No, cancelar',
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: true
    }).then((result) => {
      console.log(result);
      
      if(result.value){
        this.actividadesServicio.eliminarActividad(id).subscribe(() => {
         
          this.obtenerActividades();
          swal(
            'Actividad eliminada',
            'La Actividad ha sido eliminado con exito',
            'success'
          )
        })
      }
    })
  }

  getAtraso(date: number) {
    let now = Math.round(new Date().getTime()/1000)
    return date - now <0 && 0 || Math.floor((date - now)/1000/60/60/24)*-1;
  }

}

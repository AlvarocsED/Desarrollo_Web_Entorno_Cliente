import { Component } from '@angular/core';
import { Empleado } from '../empleado';
import { ServicioEmpleadoService } from '../servicio-empleado.service';
@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent {
  empleado!:Empleado[];
  constructor(private servicioHttp: ServicioEmpleadoService ){
   this.servicioHttp.leer_Empleado().subscribe(x=>this.empleado=x);
  }
}

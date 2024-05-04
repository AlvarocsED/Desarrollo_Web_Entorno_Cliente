import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleado } from './empleado';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ServicioEmpleadoService {
  constructor(private httpCliente: HttpClient) {

  }
 leer_Empleado():Observable<Empleado[]>{
   return this.httpCliente.get<Empleado[]>('http://moralo.atwebpages.com/ajaxListar/getTodoPersonal.php');

 }
 insertar_Emppleado(){

 }
 eliminar_Empleado(){

 }
}


import { Component } from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ServicioDatosService } from '../servicio-datos.service';
import { Vehiculo } from '../vehiculo';
import { MatInput } from '@angular/material/input';
import { MatFormField } from "@angular/material/form-field";
import { CdkTableDataSourceInput } from '@angular/cdk/table';
@Component({
  selector: 'app-componente-vehiculo',
  templateUrl: './componente-vehiculo.component.html',
  styleUrls: ['./componente-vehiculo.component.css']
})
export class ComponenteVehiculoComponent {
//construir el objeto dataSource
  dataSource= new  MatTableDataSource<Vehiculo>();
  //nombre de columnas de la cabecera
  displayedColumns: string[]=['Make_and_Model','color','transmission','fuel_type','doors','kilometrage'];
  //vehiculo!: Vehiculo[];
  //llamar al servicio y cargar en el array vehículo lista de la api
  //a continuación se lo inyectamos al objeto dataSource
constructor(private httpCliente:ServicioDatosService){
  //llamar al método listarVehiculos del sevicio
  this.httpCliente.listarVehiculos().subscribe(x=>this.dataSource.data=x)
}
applyFilter($event: KeyboardEvent) {
}
}

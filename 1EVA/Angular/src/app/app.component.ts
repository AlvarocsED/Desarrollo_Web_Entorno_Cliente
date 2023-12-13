import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Proyecto3';
  ciclo:string="DAW";
  nombreUsuario:string="";
  cambiarNombre(){
    this.ciclo="DAM";
  }
  retornarNombre(){
    this.ciclo="DAW";
  }
  cargarNombreUsuario(nombre:String){
    this.nombreUsuario=nombre.toUpperCase();
  }
}

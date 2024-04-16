import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent {
  cadena1:string="";
  cadena2:string=""
  recibir2(event: any) {
    this.cadena2="https://randomuser.me/api/portraits/women/"+event.Num2+".jpg";

  }
  recibir1(event: any) {
    this.cadena1="https://randomuser.me/api/portraits/men/"+event.Num1+".jpg";

  }

}

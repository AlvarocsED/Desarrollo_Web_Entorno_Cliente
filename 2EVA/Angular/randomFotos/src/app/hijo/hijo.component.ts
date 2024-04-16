import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent {
  @Output() devolverNum1=new EventEmitter();
  @Output() devolverNum2=new EventEmitter();

 generar() {
  this.devolverNum1.emit({Num1:Math.round(Math.random()*100)})
  this.devolverNum2.emit({Num2:Math.round(Math.random()*100)})

}
}

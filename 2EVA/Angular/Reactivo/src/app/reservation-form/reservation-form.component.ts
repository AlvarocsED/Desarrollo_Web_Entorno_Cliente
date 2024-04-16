import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ParadorService } from '../parador.service';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css']
})
export class ReservationFormComponent implements OnInit {
  reservationForm: FormGroup | undefined;
  paradores: any[] | undefined;

  constructor(
    private fb: FormBuilder,
    private paradorService: ParadorService
  ) {}

  ngOnInit(): void {
    this.reservationForm = this.fb.group({
      name: ['', Validators.required],
      hotel: ['', Validators.required],
      checkInDate: ['', Validators.required],
      checkOutDate: ['', Validators.required]
    });

    this.paradorService.obtenerParadores().subscribe(paradores => {
      this.paradores = paradores;
    });
  }

  submitForm() {
    if (this.reservationForm.valid) {
      alert("Enviado");
    } else {

    }
  }
}

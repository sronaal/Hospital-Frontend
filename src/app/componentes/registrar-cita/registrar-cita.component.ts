import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registrar-cita',
  templateUrl: './registrar-cita.component.html',
  styleUrls: ['./registrar-cita.component.css']
})
export class RegistrarCitaComponent implements OnInit {

  formularioPaciente: FormGroup
  constructor(private fb: FormBuilder) {
    this.formularioPaciente = this.fb.group({
      
      cedula: ['',Validators.required],
      nombre: ['',Validators.required],
      correo: ['',Validators.required],
      telefono: ['',Validators.required],
      fecha: ['',Validators.required]

    })
   }

  ngOnInit(): void {
  }

  agendarCita(){

  }

}

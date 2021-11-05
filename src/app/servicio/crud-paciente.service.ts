import { Injectable } from '@angular/core';

// httpclient para interactuar con la api
import { HttpClient } from '@angular/common/http'

// Para monitorear las opereacioes crud
import { Observable } from 'rxjs';

// Modelo
import { Paciente } from './paciente';
@Injectable({
  providedIn: 'root'
})
export class CrudPacienteService {
  Api: string = "";
  constructor(private clienteHTTP:HttpClient) { }



  obtenerPacientes(){
    return this.clienteHTTP.get(this.Api);
  }
}

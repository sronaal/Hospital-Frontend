import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrarCitaComponent } from './componentes/registrar-cita/registrar-cita.component';
import { ConsultarCitaComponent } from './componentes/consultar-cita/consultar-cita.component';

const routes: Routes = [
  {path: '',pathMatch:'full',redirectTo:'registrar-cita'},
  {path: 'consultar',component:ConsultarCitaComponent},
  {path: 'registrar',component:RegistrarCitaComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormGroup,FormBuilder } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrarCitaComponent } from './componentes/registrar-cita/registrar-cita.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConsultarCitaComponent } from './componentes/consultar-cita/consultar-cita.component';
import { RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    RegistrarCitaComponent,
    ConsultarCitaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

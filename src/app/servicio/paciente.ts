export class Paciente{

    Cedula: string;
    Nombre: string;
    Correo: string;
    Telefono: string;
    Fecha: string;

    constructor(Cedula:string,Nombre:string,Correo:string,Telefono:string,Fecha:string){
        this.Cedula = Cedula,
        this.Nombre = Nombre,
        this.Correo = Correo,
        this.Telefono = Telefono,
        this.Fecha = Fecha
    }


}
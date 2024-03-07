import {Tutor} from "./Tutor/tutor";

export class Mascota {
    nombre: string = "";
    raza: string = "";
    sexo: string = "";
    anioNacimiento: number = 0;
    tutor: Tutor = new Tutor();
    mostrar: boolean = true;

    public constructor() {
    }

    public incrementarEdad() {
        this.anioNacimiento--;
    }

    public mostrarMascota(): void {
        this.mostrar = !this.mostrar;
    }
}

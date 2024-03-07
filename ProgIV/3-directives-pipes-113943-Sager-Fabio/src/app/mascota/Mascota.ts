export class Mascota {
    nombre: string;
    raza: string;
    sexo: string;
    anioNacimiento: number;
    tutor: string;
    mostrar: boolean;

    public constructor(nombre: string, raza: string, sexo: string, anioNacimiento: number, tutor: string, mostrar: boolean) {
        this.nombre = nombre;
        this.raza = raza;
        this.sexo = sexo;
        this.anioNacimiento = anioNacimiento;
        this.tutor = tutor;
        this.mostrar = mostrar;
    }

    public incrementarEdad() {
        this.anioNacimiento--;
    }

    public mostrarMascota(): void {
        this.mostrar = !this.mostrar;
    }
}
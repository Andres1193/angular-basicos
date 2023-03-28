import { Component } from '@angular/core';


@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent {
    
    nombre: string = 'Capitan America';
    edad  : number = 105;

    get nombreCapitalizado(): string {
        return this.nombre.toUpperCase();
    }

    obtenerNombre(): string {
        return `${ this.nombre} - ${ this.edad }`;
    }

    cambiarNombre(): void {
        this.nombre = 'Thor';
    }

    cambiarEdad(): void {
        this.edad = 1500;
    }
}
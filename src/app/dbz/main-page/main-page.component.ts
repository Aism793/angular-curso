import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  personajes: Personaje[] = [
    {
      nombre: 'Gogú',
      poder: 15000
    },
    {
      nombre: 'Vegueta',
      poder: 7500
    }
  ];

  nuevo: Personaje = {
    nombre: 'Maestro Roshi',
    poder: 1000
  }

  /* cambiarNombre(event: any) {
    console.log(event.target.value);
  } */

  /* agregar(event: any){
    event.preventDefault();//El argumento event me permite recibir toda la información del evento que se está 
    console.log(event);//como las coordenadas donde se hizo click en el botón, la ubicación física, etc.
  }                       //preventDefault evita que se recargue la página cada vez que se de clic en el botón */

 /*  Sin embargo, esto lo soluciona angular. Solo debo importar el modulo formsModule dbzModule y en lugar de 
  usar el evento submit, usar el ngSubmit */

  
}

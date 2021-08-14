import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent {

  //El input le indica a Angular que los personajes van a venir de un componente padre. Quien sea el padre puede enviar dicha propiedad
  /* @Input()
  personajes: Personaje[] = []; */

  get personajes(): Personaje[] {
    return this.dbzService.personajes;
  }
  constructor(private dbzService: DbzService){
    
  }
}



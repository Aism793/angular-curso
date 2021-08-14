import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interface';


@Injectable()//La diferencia entre los servicios y los componentes, módulos... es que su decorador es de tipo Injectable
export class DbzService {
    /* En los servicios va toda la info, métodos... necesarios para interactuar con fuentes externas y manipular el estado de
    la info de la aplicación  */

    private _personajes: Personaje[] = [
        {
          nombre: 'Gogú',
          poder: 15000
        },
        {
          nombre: 'Vegueta',
          poder: 7500
        }
    ];
    
    get personajes(): Personaje[] {
        return [...this._personajes];
    }
    
    constructor(){
    }

    agregarPersonaje(personaje: Personaje){
        this._personajes.push(personaje);
    }
}
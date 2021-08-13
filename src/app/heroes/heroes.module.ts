import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component'; 

@NgModule({
    declarations: [ //indica qué cosas tiene el módulo (componentes, pipes...)
        HeroeComponent,
        ListadoComponent
    ],
    exports: [//indica qué cosas quiero hacer públicas, es decir, visibles fuera de este módulo
        ListadoComponent
    ],
    imports: [//Contiene usualmente módulos que necesitamos usar
        CommonModule
    ]
})
export class HeroesModule {

}
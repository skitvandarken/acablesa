import { Component } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { SliderComponent } from '../layout/slider/slider.component';
import { CategoriasComponent } from '../layout/categorias/categorias.component';
import { StatsComponent } from '../layout/stats/stats.component';
import { ParceirosComponent } from '../layout/parceiros/parceiros.component';
import { VideocardComponent } from '../layout/videocard/videocard.component';
import { RodapeComponent } from '../layout/rodape/rodape.component';
import { MensagemComponent } from '../layout/mensagem/mensagem.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [

MenuComponent,
SliderComponent,
CategoriasComponent,
StatsComponent,
ParceirosComponent,
VideocardComponent,
RodapeComponent,
MensagemComponent

  ],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}

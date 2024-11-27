import { Component } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { SliderComponent } from '../layout/slider/slider.component';
import { CategoriasComponent } from '../layout/categorias/categorias.component';
import { StatsComponent } from '../layout/stats/stats.component';
import { ParceirosComponent } from '../layout/parceiros/parceiros.component';
import { VideocardComponent } from '../layout/videocard/videocard.component';
import { RodapeComponent } from '../layout/rodape/rodape.component';
import { MensagemComponent } from '../layout/mensagem/mensagem.component';
import { CertComponent } from '../layout/cert/cert.component';
import { TestemunhosComponent } from '../testemunhos/testemunhos.component';

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
MensagemComponent,
CertComponent,
TestemunhosComponent


  ],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}

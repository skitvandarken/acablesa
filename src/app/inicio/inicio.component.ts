import { Component } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { SliderComponent } from '../layout/slider/slider.component';
import { CategoriasComponent } from '../layout/categorias/categorias.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [

MenuComponent,
SliderComponent,
CategoriasComponent

  ],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}

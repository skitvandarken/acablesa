import { Component } from '@angular/core';
import { CertComponent } from '../cert/cert.component';

@Component({
  selector: 'app-categorias',
  standalone: true,
  imports: [
    CertComponent
  ],
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.css'
})
export class CategoriasComponent {

}

import { Component } from '@angular/core';
import { CertComponent } from '../cert/cert.component';
import { ProdutosComponent } from '../produtos/produtos.component';

@Component({
  selector: 'app-categorias',
  standalone: true,
  imports: [
    CertComponent,
    ProdutosComponent
  ],
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.css'
})
export class CategoriasComponent {

}

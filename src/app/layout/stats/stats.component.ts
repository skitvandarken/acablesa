import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountUpModule } from 'ngx-countup';

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [
    CommonModule,
    CountUpModule
  ],
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.css'
})
export class StatsComponent {

  stats = [
    { label: 'Continentes', value: 4 },
    { label: 'Países', value: 20 },
    { label: 'Sistemas de Cabos Internacionais', value: 3 },
    { label: 'PoPs', value: 30 },
    { label: 'Cable Landing Stations', value: 20 },
  ];

}

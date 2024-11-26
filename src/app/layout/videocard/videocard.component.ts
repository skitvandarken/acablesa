import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-videocard',
  standalone: true,
  imports: [],
  templateUrl: './videocard.component.html',
  styleUrl: './videocard.component.css'
})
export class VideocardComponent implements OnInit {

  ngOnInit(): void {
    this.setPlaysInlineForVideo();
  }

  setPlaysInlineForVideo(): void {
    const video = document.getElementById('promoVideo') as HTMLVideoElement;

    if (video) {
      // Force inline play on supported mobile devices
      video.setAttribute('playsinline', 'true');
      video.setAttribute('webkit-playsinline', 'true');

      // Handle iOS fullscreen video issue
      video.addEventListener('loadedmetadata', () => {
        if (video.paused) {
          video.play().catch((error) => console.error('Autoplay failed:', error));
        }
      });
    }
  }
   }
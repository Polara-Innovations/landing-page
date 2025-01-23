import { Component, Input } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  @Input() images: string[] = [];
  @Input() projectTitle: string = '';
  
  currentIndex: number = 0; 

  nextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length; 
  }

  prevImage() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length; 
  }
}
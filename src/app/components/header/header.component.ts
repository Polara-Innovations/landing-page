import { Component, HostListener } from '@angular/core';
import { ThemeService } from '../../services/theme-service/theme.service';

@Component({
  standalone: false,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  activeNav: string = 'home';
  isNavbarOpen = false;

  constructor(public themeService: ThemeService) {}

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
  }

  scrollTo(elementId: string): void {
    const element = document.getElementById(elementId);
    this.activeNav = elementId;
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    this.isNavbarOpen = false; 
  }
  
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    if (window.innerWidth >= 992) {
      this.isNavbarOpen = true; 
    } else {
      this.isNavbarOpen = false; 
    }
  }
}

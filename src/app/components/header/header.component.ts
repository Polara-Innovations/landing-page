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
  isMobile = false;      

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
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    this.isNavbarOpen = false; 
  }

  @HostListener('window:scroll', [])
  onScroll() {
    const sections = ['home', 'about', 'services', 'portfolio', 'contact'];
    let currentSection = '';
    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          currentSection = section;
        }
      }
    });
    this.activeNav = currentSection;
  }
  
  @HostListener('window:resize', ['$event'])
  onResize(event?: Event) {
    if (window.innerWidth >= 992) {
      this.isNavbarOpen = true;  
      this.isMobile = false;     
    } else {
      this.isNavbarOpen = false; 
      this.isMobile = true;      
    }
  }

  ngOnInit() {
    this.onResize(undefined); 
  }
}

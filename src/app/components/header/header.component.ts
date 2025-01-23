import { Component, ElementRef, ViewChild } from '@angular/core';
import { ThemeService } from '../../services/theme-service/theme.service';

@Component({
  standalone: false,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @ViewChild('navbar', { static: false }) navbar: ElementRef | undefined;
  activeNav: string = 'home';
  isNavbarOpen = false;

  constructor(public themeService: ThemeService) {}

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  onNavClick(navItem: string): void {
    this.activeNav = navItem;
  }

    toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
    const navbarToggleBtn = document.getElementById('navbarToggleBtn');
    if (navbarToggleBtn) {
      navbarToggleBtn.setAttribute('aria-expanded', this.isNavbarOpen.toString());
    }
  }

  scrollTo(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      const headerOffset = this.navbar?.nativeElement.offsetHeight; // Obtém a altura do cabeçalho
      const elementPosition = element.getBoundingClientRect().top + window.scrollY; // Posição do elemento
      const offsetPosition = elementPosition - headerOffset; // Calcula a posição para rolagem

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth' // Rolagem suave
      });
    }
  }
}

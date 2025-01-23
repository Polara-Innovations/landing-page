import { ThemeService } from '../../services/theme-service/theme.service';
import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  activeNav: string = 'home';
  isNavbarOpen = false;

  constructor(public themeService: ThemeService, private renderer: Renderer2) {}

  @ViewChild('navbar', { static: false }) navbar: ElementRef | undefined;

  toggleTheme() {
    this.themeService.toggleTheme();
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
    this.activeNav = elementId;
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });;
    }
  }

}

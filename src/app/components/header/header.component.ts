import { Component } from '@angular/core';
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
}

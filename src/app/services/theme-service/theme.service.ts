import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private isDarkMode: boolean = false;

  constructor() {
    this.isDarkMode = localStorage.getItem('theme') === 'dark'; 
    this.updateBodyClass();
  }

  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light'); 
    this.updateBodyClass();
  }

  getIsDarkMode(): boolean {
    return this.isDarkMode;
  }

  private updateBodyClass(): void {
    if (this.isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }
}

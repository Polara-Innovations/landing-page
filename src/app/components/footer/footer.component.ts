import { Component } from '@angular/core';
import { ThemeService } from '../../services/theme-service/theme.service';

@Component({
  standalone: false,
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  constructor(public themeService: ThemeService) {}

  getActualYear() {
    return new Date().getFullYear();
  }
}


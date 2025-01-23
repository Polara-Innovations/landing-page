import { Component } from '@angular/core';
import { ThemeService } from './services/theme-service/theme.service';

@Component({
  standalone: false,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public themeService: ThemeService) {}
}

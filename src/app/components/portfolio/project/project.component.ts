import { Component, Input } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() images: string[] = [];
  @Input() link: string = '';
}
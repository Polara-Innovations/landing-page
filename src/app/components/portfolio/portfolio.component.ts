import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  projects = [
    {
      title: 'Projeto 1',
      description: 'Descrição do projeto 1.',
      images: [
        'https://picsum.photos/400/300?random=1',  
        'https://picsum.photos/400/300?random=2',  
        'https://picsum.photos/400/300?random=3',  
      ],
      link: 'https://link-para-o-projeto1.com'
    },
    {
      title: 'Projeto 2',
      description: 'Descrição do projeto 2.',
      images: [
        'https://picsum.photos/400/300?random=4',  
        'https://picsum.photos/400/300?random=5', 
        'https://picsum.photos/400/300?random=6', 
      ],
      link: 'https://link-para-o-projeto2.com'
    },
    {
      title: 'Projeto 3',
      description: 'Descrição do projeto 3.',
      images: [
        'https://picsum.photos/400/300?random=7',  
        'https://picsum.photos/400/300?random=8',  
        'https://picsum.photos/400/300?random=9',  
      ],
      link: 'https://link-para-o-projeto3.com'
    }
  ];
}
import { Component } from '@angular/core';
import { EmailJsSevice } from '../../services/emailjs-service/emailjs.service';

@Component({
  standalone: false,
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    message: '',
  };

  constructor(private emailService: EmailJsSevice) {}

  onSubmit() {
    this.emailService
      .sendEmail(this.formData)
      .then(() => {
        alert('Mensagem enviada com sucesso!');
        this.formData = { name: '', email: '', message: '' };
      })
      .catch(() => {
        alert('Ocorreu um erro ao enviar a mensagem. Tente novamente.');
      });
  }
}

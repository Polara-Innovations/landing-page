import { Injectable } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { environment } from '../../../environments/environment.default';

@Injectable({
  providedIn: 'root',
})
export class EmailJsSevice {
  private serviceId = environment.emailJs.serviceId
  private templateId = environment.emailJs.templateId
  private userId = environment.emailJs.userId

  sendEmail(formData: { name: string; email: string; message: string }): Promise<EmailJSResponseStatus> {
    return emailjs.send(this.serviceId, this.templateId, formData, this.userId);
  }
}

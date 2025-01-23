import { TestBed } from '@angular/core/testing';

import { EmailJsSevice } from './emailjs.service';

describe('EmailjsService', () => {
  let service: EmailJsSevice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmailJsSevice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

export interface Project {
  title: string;
  description: string;
  images: string[];
  link: string;
}

@Injectable({
  providedIn: 'root'
})
export class Firebase {
  constructor(private firestore: AngularFirestore) {}

  getProjects(): Observable<Project[]> {
    return this.firestore.collection<Project>('projects').valueChanges();
  }
}
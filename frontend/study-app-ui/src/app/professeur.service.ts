// professeur.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProfesseurAttente } from './models/professeur-attente';
import { Professeur } from './models/professeur';

@Injectable({
  providedIn: 'root'
})
export class ProfesseurService {
  private apiUrl = 'http://localhost:8085/api/professeurs'; // Changez l'URL selon votre configuration

  constructor(private http: HttpClient ) { }

  getProfesseurs(): Observable<Professeur[]> {
    return this.http.get<Professeur[]>(this.apiUrl);
  }
  
  accepterProfesseur(id: string): Observable<Professeur> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Professeur>(url, {});
  }
  createProfesseur(professeur: Professeur): Observable<Professeur> {
    return this.http.post<Professeur>(this.apiUrl, professeur);
  }
  getProfesseurById(id: string): Observable<Professeur> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Professeur>(url);
  }

  updateProfesseur(professeur: Professeur): Observable<Professeur> {
    const url = `${this.apiUrl}/${professeur.id}`; // Assurez-vous que professeur.id est correct
    return this.http.put<Professeur>(url, professeur);
  }
  
  
  
  supprimerProfesseur(id: string): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }

  
  // Ajoutez d'autres méthodes pour effectuer des opérations comme l'acceptation, la suppression, l'édition, etc.
}

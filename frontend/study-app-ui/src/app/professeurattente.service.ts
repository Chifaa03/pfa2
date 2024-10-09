import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProfesseurAttente } from './models/professeur-attente';
import { Observable } from 'rxjs';
import { Professeur } from './models/professeur';

@Injectable({
  providedIn: 'root'
})
export class ProfesseurattenteService {


  private apiUrl = 'http://localhost:8085/api/professeurs-attente'; // Changez l'URL selon votre configuration
  picture: any;

  constructor(private http: HttpClient) { }

  getProfesseursAttente(): Observable<ProfesseurAttente[]> {
    return this.http.get<ProfesseurAttente[]>(this.apiUrl);
  }
  getProfesseurAttenteById(id: string): Observable<ProfesseurAttente> {
    return this.http.get<ProfesseurAttente>(`${this.apiUrl}/${id}`);
  }
  supprimerProfesseurAttente(id: string): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
  creerProfesseurAttente(nouveauProfesseur: ProfesseurAttente): Observable<ProfesseurAttente> {
    return this.http.post<ProfesseurAttente>(this.apiUrl, nouveauProfesseur);
  }


 

  
}

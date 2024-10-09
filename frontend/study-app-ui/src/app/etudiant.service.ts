import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Etudiant } from './models/etudiant';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  
  private apiUrl = 'http://localhost:8085/api/etudiant'; // Changez l'URL selon votre configuration
  picture: any;

  constructor(private http: HttpClient) { }

  getEtudiant(): Observable<Etudiant[]> {
    return this.http.get<Etudiant[]>(this.apiUrl);
  }
  getEtudiantById(id: string): Observable<Etudiant> {
    return this.http.get<Etudiant>(`${this.apiUrl}/${id}`);
  }
  supprimerEtudiant(id: string): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
  creerEtudiant(nouveauEtudiant: Etudiant): Observable<Etudiant> {
    return this.http.post<Etudiant>(this.apiUrl, nouveauEtudiant);
  }


}

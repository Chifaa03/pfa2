import { Component, OnInit } from '@angular/core';
import { ProfesseurService } from '../professeur.service';
import { ProfesseurAttente } from '../models/professeur-attente';
import { ProfesseurattenteService } from '../professeurattente.service';
import { Professeur } from '../models/professeur';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-professeur-attente',
  templateUrl: './professeur-attente.component.html',
  styleUrls: ['./professeur-attente.component.css']
})
export class ProfesseurAttenteComponent implements OnInit {
  professeursAttente!: ProfesseurAttente[];
  professeurs: ProfesseurAttente[] = []; 
  userId: string | null = null;
  user: any;
  constructor(private professeurService: ProfesseurService ,private professeurAttenteService: ProfesseurattenteService ,private authService : AuthService ,private router: Router) { }

  ngOnInit(): void {
    this.userId = localStorage.getItem('userId');
    if(this.userId != null){
      this.authService.getUser(this.userId).subscribe(
        res=>{
          this.user=res;
        }, err =>{
          console.log(err);
        }
      );
    }
    this.fetchProfesseursAttente();
  }

  fetchProfesseursAttente(): void {
    this.professeurAttenteService.getProfesseursAttente().subscribe(
      professeurs => {
        this.professeursAttente = professeurs;
      },
      error => {
        console.log('Error fetching professeurs en attente:', error);
      }
    );
  }
  accepterProfesseur(id: string): void {
    this.professeurAttenteService.getProfesseurAttenteById(id)
      .subscribe((professeurAttente: any) => {
        const nouveauProfesseur: Professeur = {
          id: professeurAttente.id ,
          firstName: professeurAttente.firstName,
          lastName: professeurAttente.lastName,
          email: professeurAttente.email,
          password: professeurAttente.password,
          confirmPassword:professeurAttente.confirmPassword,
          phoneNumber: professeurAttente.phoneNumber,
          birthday: professeurAttente.birthday,
          speciality: professeurAttente.speciality,
          pictureUrl: professeurAttente.pictureUrl // Assurez-vous que photoUrl est défini dans le modèle Professeur
         
        };

        this.professeurService. createProfesseur(nouveauProfesseur)
          .subscribe((nouveauProfesseur: any) => {
            this.supprimerProfesseurAttente(id);
            alert('Professeur approuvé avec succès !');
          
            this.fetchProfesseursAttente(); 
            // Traitez la réponse du service si nécessaire
          }, (error: any) => {
            // Traitez l'erreur si nécessaire
          });
      }, (error: any) => {
        // Traitez l'erreur si nécessaire
      });
  }
  supprimerProfesseurAttente(id: string): void {
    this.professeurAttenteService.supprimerProfesseurAttente(id)
      .subscribe(() => {
        // Le professeur en attente a été supprimé avec succès
      }, (error: any) => {
        // Traitez l'erreur si nécessaire
      });
  }
  supprimerProfesseurA(id: string): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce professeur ?')){
    this.professeurAttenteService.supprimerProfesseurAttente(id)
    .subscribe(() => {
   
      this.fetchProfesseursAttente(); 
      // Le professeur en attente a été supprimé avec succès
    }, (error: any) => {
      // Traitez l'erreur si nécessaire
    });
  }}
  


 
}
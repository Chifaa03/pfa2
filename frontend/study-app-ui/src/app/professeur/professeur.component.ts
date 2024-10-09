import { Component } from '@angular/core';
import { ProfesseurService } from '../professeur.service';
import { ProfesseurattenteService } from '../professeurattente.service';
import { Professeur } from '../models/professeur';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-professeur',
  templateUrl: './professeur.component.html',
  styleUrls: ['./professeur.component.css']
})
export class ProfesseurComponent {
  userId: string | null = null;
  user: any;
   editIndex: number = -1;
   tempPictureUrl: string = '';

  constructor( private router: Router,private professeurService: ProfesseurService ,private ProfesseurattenteService: ProfesseurattenteService , private authService : AuthService){}
  professeurs!: Professeur[];
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
    this.fetchProfesseurs();
  }

  fetchProfesseurs(): void {
    this.professeurService.getProfesseurs().subscribe(
      professeurs => {
        this.professeurs = professeurs;
      },
      error => {
        console.log('Error fetching professeurs en attente:', error);
      }
    );
  } accepterProfesseur(id: string){

  }
 

  supprimerProfesseur(id: string): void {
    if (confirm("Êtes-vous sûr de vouloir supprimer ce professeur ?")) {
      this.professeurService.supprimerProfesseur(id).subscribe(
        () => {
          // Suppression réussie, rafraîchissez la liste des professeurs si nécessaire
          this.fetchProfesseurs();
        },
        error => {
          console.log('Error deleting professeur:', error);
        }
      );
    }
  }
  professeur: any[] = []; // Votre liste de professeurs
  editMode: boolean[] = []; // Tableau pour suivre le mode édition

  toggleEditMode(index: number): void {
    console.log('Toggle edit mode called for index:', index);
    this.tempPictureUrl = this.professeurs[index].pictureUrl;
    // Activez le mode édition pour l'index donné
    this.editMode[index] = true;

  }
  

  saveChanges(index: number): void {
    console.log('Toggle edit mode called for index:', index);
    this.professeurService.updateProfesseur(this.professeurs[index]).subscribe(
      updatedProfesseur => {
        
        alert('Modifications enregistrées avec succès !');
        // Traitez la réponse du serveur si nécessaire
        this.fetchProfesseurs();
      },
      error => {
        console.log('Error updating professeur:', error);
      }
    );
    this.editMode[index] = false;
    this.fetchProfesseurs();
  }

  cancelEdit(index: number): void {
    this.professeurs[index].pictureUrl = this.tempPictureUrl;
    this.editMode[index] = false;
    this.fetchProfesseurs();
  }
  openFileInput(index: number): void {
    const fileInput = document.getElementById(`fileInput-${index}`);
    if (fileInput) {
        fileInput.click();
    }
}

onFileSelected(event: any, index: number): void {
  console.log(index);
    const file: File = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = () => {
            this.professeurs[index].pictureUrl = reader.result as string;
        };
        reader.readAsDataURL(file);
    }
}



}

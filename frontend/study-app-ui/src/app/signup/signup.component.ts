import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { ProfesseurattenteService } from '../professeurattente.service';
import { EtudiantService } from '../etudiant.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;
  pictureUrl: any;
  

  constructor(private formBuilder: FormBuilder, private authService: AuthService,
              private router: Router, private professeurAttenteService: ProfesseurattenteService,
              private etudiantService: EtudiantService) {}

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      phoneNumber: [''],
      birthday: [''],
      role: ['', Validators.required],
      speciality: [''],
      pictureUrl: ['']
    });
  }

  onSubmit() {
    // Récupérer les données du formulaire
    console.log(this.signupForm.value)
    const formData = this.signupForm.value;

    
    // Affecter la valeur de pictureUrl à partir de la propriété de classe
    formData.pictureUrl = this.pictureUrl;
    console.log(this.pictureUrl)
    console.log(formData.pictureUrl)
    //console.log("Specialityq:", this.speciality);
    //console.log("Speciality:", formData.speciality);
    //this.speciality=formData.speciality;
    //console.log("Specialityq:", this.speciality);

    // Appeler le service d'authentification pour l'inscription
    this.authService.signUp( formData)
      .subscribe(response => {
        console.log(this.signupForm.value)
        console.log(response);
        if (response.ourUsers) {
          localStorage.setItem('userId', response.ourUsers.id);
          localStorage.setItem('userRole', response.ourUsers.role);
         
          if (localStorage.getItem('userRole') === 'professeur-attente') {
            // Ajouter les coordonnées dans la table professeur-attente ici
            this.addProfesseurEnAttente(response.ourUsers);
          }
          if (localStorage.getItem('userRole') === 'etudiant') {
            // Ajouter les coordonnées dans la table professeur-attente ici
            this.addEtudiant(response.ourUsers);
          }
        }
        localStorage.setItem('token', response.token);
        localStorage.setItem('refreshToken', response.refreshToken);
        console.log(localStorage);
        this.router.navigate(['/login']);
      },
      error => {
        // Gérer les erreurs d'inscription
        console.error('Erreur lors de l\'inscription :', error);
      });
  }

  addEtudiant(user: any) {
    this.etudiantService.creerEtudiant(user)
      .subscribe(
        response => {
          console.log('Les informations de l\'utilisateur ont été ajoutées avec succès à la table professeur-attente:', response);
        },
        error => {
          console.error('Erreur lors de l\'ajout des informations de l\'utilisateur à la table professeur-attente:', error);
        }
      );
  }

  addProfesseurEnAttente(user: any) {
    this.professeurAttenteService.creerProfesseurAttente(user)
      .subscribe(
        response => {
          console.log('Les informations de l\'utilisateur ont été ajoutées avec succès à la table professeur-attente:', response);
        },
        error => {
          console.error('Erreur lors de l\'ajout des informations de l\'utilisateur à la table professeur-attente:', error);
        }
      );
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.pictureUrl = reader.result as string;
        console.log(this.pictureUrl);
      };
      reader.readAsDataURL(file);
    }
  }
  setRoleFontSize(event: any) {
    const selectElement = event.target as HTMLSelectElement;
    if (selectElement) {
        const selectedValue = selectElement.value;
        if (selectedValue === 'etudiant') {
            selectElement.classList.remove('instructor-selected');
        } else if (selectedValue === 'professeur-attente') {
            selectElement.classList.add('instructor-selected');
        }
    }
}


}

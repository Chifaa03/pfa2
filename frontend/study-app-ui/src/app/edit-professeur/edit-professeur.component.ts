import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfesseurAttente } from '../models/professeur-attente';
import { ProfesseurattenteService } from '../professeurattente.service';
import { ProfesseurService } from '../professeur.service';
import { Professeur } from '../models/professeur';

@Component({
  selector: 'app-edit-professeur',
  templateUrl: './edit-professeur.component.html',
  styleUrls: ['./edit-professeur.component.css']
})
export class EditProfesseurComponent implements OnInit {
  professeur: Professeur = {
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    birthday: new Date(),
    speciality: '',
    pictureUrl: ''
  };

  constructor(private route: ActivatedRoute, private professeurAttenteService: ProfesseurattenteService, private professeurService: ProfesseurService, private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.professeur.id = id;
      this.professeurService.getProfesseurById(id)
        .subscribe(
          (professeur: Professeur) => {
          
            this.professeur.firstName = professeur.firstName;
            this.professeur.lastName = professeur.lastName;
            this.professeur.email = professeur.email;
            this.professeur.password = professeur.password;
            this.professeur.confirmPassword = professeur.password;
            this.professeur.phoneNumber = professeur.phoneNumber;
            this.professeur.birthday = professeur.birthday;
            this.professeur.speciality = professeur.speciality;
            this.professeur.pictureUrl = professeur.pictureUrl;
          },
          (error) => {
            console.error('Error fetching professeur:', error);
          }
        );
    }
  }

  editerProfesseur(): void {
    console.log('Identifiant du professeur:', this.professeur.id);
    // Mettre à jour le professeur dans la base de données en utilisant le service
    this.professeurService.updateProfesseur(this.professeur)
      .subscribe(
        (result) => {
          console.log('Professeur mis à jour avec succès :', result);
          this.router.navigate(['/home-admin']);
          // Gérer le résultat de la mise à jour si nécessaire
        },
        (error) => {
          console.error('Erreur lors de la mise à jour du professeur :', error);
          // Gérer l'erreur de mise à jour si nécessaire
        }
      );
  }
}

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor( private authService: AuthService , private router: Router) { }



  ngOnInit(): void {
    // Vous pouvez également récupérer le rôle ici lors de l'initialisation du composant
    const userRole = this.authService.getUserRole();
    console.log('User role:', userRole);
  }
  
  onSubmit() {
    this.authService.signIn({email: this.username, password: this.password})
      .subscribe(response => {
        console.log(response);
        if (response.ourUsers) {
          localStorage.setItem('userId', response.ourUsers.id);
          localStorage.setItem('userRole', response.ourUsers.role);
          if (localStorage.getItem('userRole') === 'admin') {
            this.router.navigate(['/home-admin']);
          }
        }
        localStorage.setItem('token', response.token);
        localStorage.setItem('refreshToken', response.refreshToken);
        console.log(localStorage);
        const userRole = this.authService.getRole();
        console.log('User role:', localStorage.getItem('userRole'));
      
      },
      error => {
        if (error.status === 401) {
          this.errorMessage = 'Nom d\'utilisateur ou mot de passe incorrect.';
        } else {
          this.errorMessage = 'Une erreur s\'est produite. Veuillez réessayer plus tard.';
        }
        // Gérer les erreurs d'authentification
        console.error('Erreur lors de l\'authentification :', error);
      }
    );
  }
}

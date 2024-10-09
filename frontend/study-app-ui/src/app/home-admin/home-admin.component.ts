import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css']
})
export class HomeAdminComponent implements OnInit{

  userId: string | null = null;
  user: any;

  constructor( private authService : AuthService, private router: Router) { }

  ngOnInit() {
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
  }

  showPending: boolean = true; // Par défaut, afficher les professeurs en attente
  showActive: boolean = false;

  // Méthodes pour basculer entre les professeurs en attente et les professeurs actifs
  showPendingProfessors() {
    this.showPending = true;
    this.showActive = false;
  }

  showActiveProfessors() {
    this.showPending = false;
    this.showActive = true;
  }
  logoutAdmin(){
    this.authService.logout()
    console.log(localStorage);
    this.router.navigate(['/login']);
  }
  changeButtonColor() {
    const button = document.querySelector('.tab-buttons button');
    if (button instanceof HTMLElement) {
      if (button.style.backgroundColor === 'black') {
        button.style.backgroundColor = '#4267B2';
      } else {
        button.style.backgroundColor = 'black';
      }
    }
  }
  
}

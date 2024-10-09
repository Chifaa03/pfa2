import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploadPostComponent } from './upload-post/upload-post.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ProfesseurAttenteComponent } from './professeur-attente/professeur-attente.component';
import { EditProfesseurComponent } from './edit-professeur/edit-professeur.component';
import { ProfesseurComponent } from './professeur/professeur.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'home-admin', component: HomeAdminComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'professeur-attente', component: ProfesseurAttenteComponent },
  { path: 'professeur', component: ProfesseurComponent },
  { path: 'edit-professeur/:id', component: EditProfesseurComponent },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GroupChatComponent } from './group-chat/group-chat.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxFileDropModule } from 'ngx-file-drop';
import { UploadPostComponent } from './upload-post/upload-post.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatOptionModule } from '@angular/material/core';
import { PostsComponent } from './posts/posts.component';
import { CommentsComponent } from './comments/comments.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfesseurAttenteComponent } from './professeur-attente/professeur-attente.component';
import { ProfesseurComponent } from './professeur/professeur.component';
import { EditProfesseurComponent } from './edit-professeur/edit-professeur.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GroupChatComponent,
    HomeComponent,
    UploadPostComponent,
    PostsComponent,
    CommentsComponent,
    HomeAdminComponent,
    SignupComponent,
    LoginComponent,
    ProfesseurAttenteComponent,
    ProfesseurComponent,
    EditProfesseurComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgxFileDropModule,
    FlexLayoutModule,
    MatOptionModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

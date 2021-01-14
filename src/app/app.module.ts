import { RouterModule } from '@angular/router';

import { SignupFormComponent } from './signup-form/signup-form.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ContactComponent } from './contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InputFormatDirective } from './input-format.directive';
import { PostsComponent } from './posts/posts.component';
import { PostService } from './services/post.service';
import { HomeComponent } from './home/home.component';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    InputFormatDirective,
    SignupFormComponent,
    PostsComponent,
   
    HomeComponent,
    GithubFollowersComponent,
    GithubProfileComponent,
    NotFoundComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path:'',
        component:HomeComponent
      },
      {
        path:'archives/:year/:month',
        component:GithubProfileComponent
      },
      {
        path:'followers',
        component:GithubFollowersComponent
      },
      
      {
        path:'posts',
        component: PostsComponent
      },
      {
        path:'**',
        component: NotFoundComponent
      }
     ]),
    NgbModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }

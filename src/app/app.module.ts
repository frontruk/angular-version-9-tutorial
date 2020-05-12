import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { AuthorisedComponent } from './layouts/authorised/authorised.component';
import { NonAuthorisedComponent } from './layouts/non-authorised/non-authorised.component';
import { DashboardComponent } from './container/dashboard/dashboard.component';
import { UserComponent } from './container/user/user.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { UserLoginComponent } from './container/user-login/user-login.component';
import { UserLoginFormComponent } from './components/user-login-form/user-login-form.component';
import { HttpClientModule } from '@angular/common/http';
import { CardUserComponent } from './components/card-user/card-user.component';
import { CardComponent } from './components/card/card.component';
import { RoleTypeGuard } from './guards/role-type.guard';

@NgModule({
  declarations: [
    AppComponent,
    AuthorisedComponent,
    NonAuthorisedComponent,
    DashboardComponent,
    UserComponent,
    HeaderComponent,
    FooterComponent,
    UserLoginComponent,
    UserLoginFormComponent,
    CardUserComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login'
      },
      {
        path: 'login',
        component: NonAuthorisedComponent,
        children: [
          {
            path: '',
            component: UserLoginComponent
          }
        ]
      },
      {
        path: 'dashboard',
        component: AuthorisedComponent,
        canActivate: [RoleTypeGuard],
        children: [
          { 
            path: '',
            component: DashboardComponent
          }
        ]
      },
      {
        path: 'user',
        component: AuthorisedComponent,
        children: [
          { 
            path: '',
            component: UserComponent
          }
        ]
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

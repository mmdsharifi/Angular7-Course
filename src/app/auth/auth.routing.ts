import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const authRoutes: Routes = [
  {
    path: 'auth', // روتینگ حالت لیزی ---> path: ''
    component: AuthComponent,
    children: [
      {
        path: '',
        redirectTo: 'login', // auth/login
        pathMatch: 'full'
      },
      {
        path: 'login',
        component: LoginComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(authRoutes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}

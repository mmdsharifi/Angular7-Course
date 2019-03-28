import { ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { ThemeModule } from '../@theme/theme.module';

@NgModule({
  declarations: [AuthComponent, LoginComponent],
  imports: [CommonModule, ThemeModule, AuthRoutingModule, ReactiveFormsModule]
})
export class AuthModule {}

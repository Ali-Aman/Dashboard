import { Routes, RouterModule } from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';


const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
 
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  
  
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
//export const Route.tsRoutes = RouterModule.forChild(routes);

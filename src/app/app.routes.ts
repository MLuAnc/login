import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'login',
        loadComponent: ()=> import('./componentes/login/login.component')
    },
    {
        path: 'register',
        loadComponent: ()=> import('./componentes/register/register.component')
    },
    {
        path: 'forgot-password',
        loadComponent: ()=> import('./componentes/forgot-password/forgot-password.component')
    },
    {
        path: 'dashboard',
        loadComponent: ()=> import('./componentes/dashboard/dashboard.component')
    },
];

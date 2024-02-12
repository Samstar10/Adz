import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpStepOneComponent } from './sign-up-step-one/sign-up-step-one.component';

export const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'sign-up-one',
        component: SignUpStepOneComponent
    }
];

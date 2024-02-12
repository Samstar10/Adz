import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpStepOneComponent } from './sign-up-step-one/sign-up-step-one.component';
import { SignUpStepTwoComponent } from './sign-up-step-two/sign-up-step-two.component';

export const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'sign-up-one',
        component: SignUpStepOneComponent
    },
    {
        path: 'sign-up-two',
        component: SignUpStepTwoComponent
    }
];

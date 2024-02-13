import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpStepOneComponent } from './sign-up-step-one/sign-up-step-one.component';
import { SignUpStepTwoComponent } from './sign-up-step-two/sign-up-step-two.component';
import { SignUpStepThreeComponent } from './sign-up-step-three/sign-up-step-three.component';
import { SignUpStepFourComponent } from './sign-up-step-four/sign-up-step-four.component';

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
    },
    {
        path: 'sign-up-three',
        component: SignUpStepThreeComponent
    },
    {
        path: 'sign-up-four',
        component: SignUpStepFourComponent
    }
];

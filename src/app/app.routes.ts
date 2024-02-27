import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpStepOneComponent } from './sign-up-step-one/sign-up-step-one.component';
import { SignUpStepTwoComponent } from './sign-up-step-two/sign-up-step-two.component';
import { SignUpStepThreeComponent } from './sign-up-step-three/sign-up-step-three.component';
import { SignUpStepFourComponent } from './sign-up-step-four/sign-up-step-four.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CampaignsComponent } from './campaigns/campaigns.component';
import { Campaigns2Component } from './campaigns-2/campaigns-2.component';
import { CampaignsThreeComponent } from './campaigns-three/campaigns-three.component';
import { CampaignsFourComponent } from './campaigns-four/campaigns-four.component';
import { CampaignFiveComponent } from './campaign-five/campaign-five.component';
import { CampaignsSixComponent } from './campaigns-six/campaigns-six.component';
import { CampaignsSevenComponent } from './campaigns-seven/campaigns-seven.component';
import { CampaignsDashboardComponent } from './campaigns-dashboard/campaigns-dashboard.component';
import { TransactionsHomeComponent } from './transactions-home/transactions-home.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
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
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'campaigns',
        component: CampaignsComponent
    },
    {
        path: 'campaigns-2',
        component: Campaigns2Component
    },
    {
        path: 'campaigns-3',
        component: CampaignsThreeComponent
    },
    {
        path: 'campaigns-4',
        component: CampaignsFourComponent
    },
    {
        path: 'campaigns-5',
        component: CampaignFiveComponent
    },
    {
        path: 'campaigns-6',
        component: CampaignsSixComponent
    },
    {
        path: 'campaigns-7',
        component: CampaignsSevenComponent
    },
    {
        path: 'campaigns-dashboard',
        component: CampaignsDashboardComponent
    },
    {
        path: 'transactions',
        component: TransactionsHomeComponent
    }
];

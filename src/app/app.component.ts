import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpStepOneComponent } from './sign-up-step-one/sign-up-step-one.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    LoginComponent, 
    RouterOutlet,
    SignUpStepOneComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Reward-adz';
}

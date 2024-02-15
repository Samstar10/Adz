import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-sign-up-step-three',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './sign-up-step-three.component.html',
  styleUrl: './sign-up-step-three.component.css'
})
export class SignUpStepThreeComponent {

  constructor(private router: Router){}

  redirectTo(){
    this.router.navigate(['/sign-up-four']);
  }
}

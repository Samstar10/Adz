import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-sign-up-step-two',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './sign-up-step-two.component.html',
  styleUrl: './sign-up-step-two.component.css'
})
export class SignUpStepTwoComponent {

  constructor(private router: Router){}

  redirectTo(){
    this.router.navigate(['/sign-up-three']);
  }
}

import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-sign-up-step-one',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './sign-up-step-one.component.html',
  styleUrl: './sign-up-step-one.component.css'
})
export class SignUpStepOneComponent {

  constructor(private router: Router){}
  
  redirectTo(){
    this.router.navigate(['/sign-up-two']);
  }
}

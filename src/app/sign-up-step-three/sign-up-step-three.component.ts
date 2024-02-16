import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { SignUpServiceService } from '../sign-up-service.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-sign-up-step-three',
  standalone: true,
  imports: [
    RouterModule,
    HttpClientModule
  ],
  providers: [SignUpServiceService],
  templateUrl: './sign-up-step-three.component.html',
  styleUrl: './sign-up-step-three.component.css'
})
export class SignUpStepThreeComponent {

  constructor(private router: Router, private signUpService: SignUpServiceService){}

  redirectTo(){
    this.router.navigate(['/sign-up-four']);
  }
}

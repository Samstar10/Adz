import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { SignUpServiceService } from '../sign-up-service.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-sign-up-step-one',
  standalone: true,
  imports: [
    RouterModule,
    HttpClientModule
  ],
  providers: [SignUpServiceService],
  templateUrl: './sign-up-step-one.component.html',
  styleUrl: './sign-up-step-one.component.css'
})
export class SignUpStepOneComponent {
  companyName: string = '';
  companyEmail: string = '';
  adminUsername: string = '';
  phoneNumber: string = '';
  password: string = '';

  constructor(private router: Router, private signUpService: SignUpServiceService){}
  
  redirectTo(){
    this.signUpService.updateData({
      companyName: this.companyName,
      companyEmail: this.companyEmail,
      adminUsername: this.adminUsername,
      phoneNumber: this.phoneNumber,
      password: this.password
    })
    this.router.navigate(['/sign-up-two']);
  }
}

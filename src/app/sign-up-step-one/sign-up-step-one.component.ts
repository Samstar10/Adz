import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { SignUpServiceService } from '../sign-up-service.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sign-up-step-one',
  standalone: true,
  imports: [
    RouterModule,
    HttpClientModule,
    FormsModule
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
  confirmPassword: string = '';

  constructor(private router: Router, private signUpService: SignUpServiceService){}
  
  redirectTo(){
    if(this.companyName === '' || this.companyEmail === '' || this.adminUsername === '' || this.phoneNumber === '' || this.password === ''){
      alert('Please fill all fields');
    }else if(this.password !== this.confirmPassword){
      alert('Passwords do not match');
    }else{
      console.log(this.companyName, this.companyEmail, this.adminUsername, this.phoneNumber);
      this.signUpService.updateData({
        companyName: this.companyName,
        companyEmail: this.companyEmail,
        adminUsername: this.adminUsername,
        phoneNumber: this.phoneNumber,
        password: this.password
      })
      console.log('This step completed successfully');
      this.router.navigate(['/sign-up-two']);
    }
  }
}

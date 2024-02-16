import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { SignUpServiceService } from '../sign-up-service.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-sign-up-step-four',
  standalone: true,
  imports: [
    RouterModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [SignUpServiceService],
  templateUrl: './sign-up-step-four.component.html',
  styleUrl: './sign-up-step-four.component.css'
})
export class SignUpStepFourComponent {

  companyLogo: string = '';
  companyThemeColor: string = '';

  constructor(private router: Router, private signUpService: SignUpServiceService){}

  

  completeSignUp(){
    if(this.companyLogo === '' || this.companyThemeColor === ''){
      alert('Please fill all fields');
    }else{
      this.signUpService.updateData({
        companyLogo: this.companyLogo,
        companyThemeColor: this.companyThemeColor
      })
      this.signUpService.submitData().subscribe({
        next: (response) => {
          console.log('Sign Up successful',response);
          this.router.navigate(['/login']);
        },
        error: (error) => {
          console.log('Sign Up failed',error);
        }
      })
    }
  }

}

import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { SignUpServiceService } from '../sign-up-service.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sign-up-step-three',
  standalone: true,
  imports: [
    RouterModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [SignUpServiceService],
  templateUrl: './sign-up-step-three.component.html',
  styleUrl: './sign-up-step-three.component.css'
})
export class SignUpStepThreeComponent {

  certOfRegistration: string = '';
  companyByLaws: string = '';

  constructor(private router: Router, private signUpService: SignUpServiceService){}

  redirectTo(){
    if(this.certOfRegistration === '' || this.companyByLaws === ''){
      alert('Please fill all fields');
    }else{
      this.signUpService.updateData({
        certOfRegistration: this.certOfRegistration,
        companyByLaws: this.companyByLaws
      })
      console.log('This step completed successfully');
      this.router.navigate(['/sign-up-four']);
    }
  }
}

import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { SignUpServiceService } from '../sign-up-service.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sign-up-step-two',
  standalone: true,
  imports: [
    RouterModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [SignUpServiceService],
  templateUrl: './sign-up-step-two.component.html',
  styleUrl: './sign-up-step-two.component.css'
})
export class SignUpStepTwoComponent {
  companySize: string = '';
  currency: string = '';

  constructor(private router: Router, private signUpService: SignUpServiceService){}

  redirectTo(){
    if(this.companySize === '' || this.currency === ''){
      alert('Please fill all fields');
    }else{
      this.signUpService.updateData({
        companySize: this.companySize,
        currency: this.currency
      })
      console.log('This step completed successfully');
      this.router.navigate(['/sign-up-three']);
    }
  }
}

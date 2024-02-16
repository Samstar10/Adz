import { Injectable } from '@angular/core';
import { SignUpData } from './sign-up-data';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignUpServiceService {
  private signUpdata: SignUpData = {
    companyName: '',
    companyEmail: '',
    adminUsername: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
    companySize: '',
    currency: '',
    certOfRegistration: '',
    companyByLaws: '',
    companyLogo: '',
    companyThemeColor: ''
  };

  constructor(private http: HttpClient) { }

  updateData(data: Partial<SignUpData>) {
    console.log('Sign Up Data',data);
    this.signUpdata = { ...this.signUpdata, ...data };
    console.log('Sign Up Data',this.signUpdata);
  }

  submitData(): Observable<any> {
    // Call update data to update the sign up data in the service
    this.updateData({
      
    })
    console.log('Sign Up Data',this.signUpdata);
    return this.http.post('http://localhost:3000/users', this.signUpdata);
  }
}

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
    this.signUpdata = { ...this.signUpdata, ...data };
  }

  submitData(): Observable<any> {
    return this.http.post('http://localhost:3000/users', this.signUpdata);
  }
}

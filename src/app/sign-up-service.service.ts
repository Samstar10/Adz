import { Injectable } from '@angular/core';
import { SignUpData } from './sign-up-data';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignUpServiceService {
  private localStorageKey = 'signUpData';

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
    const existingData = JSON.parse(localStorage.getItem(this.localStorageKey) || '{}');
    this.signUpdata = { ...existingData, ...data };
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.signUpdata));
  }

  getStoredData(): SignUpData{
    return JSON.parse(localStorage.getItem(this.localStorageKey) || '{}');
  }

  submitData(): Observable<any> {
    const finalData = this.getStoredData();
    // Call update data to update the sign up data in the service
    console.log('Sign Up Data', finalData);
    return this.http.post('http://localhost:3000/users', finalData);
  }

  clearStoredData() {
    localStorage.removeItem(this.localStorageKey);
  }
}

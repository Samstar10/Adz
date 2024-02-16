import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RouterModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, 
    private router: Router){}

  login() {
    this.authService.login(this.email, this.password).subscribe((result) => {
      if (result) {
        this.router.navigate(['/dashboard']);
      }else {
        alert('Invalid credentials');
      }
    });
  }

}

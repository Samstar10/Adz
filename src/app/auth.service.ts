import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<boolean> {  
    return this.http.get<any[]>('http://localhost:3000/users').pipe(
      map(users => {
        const user = users.find(u => u.companyEmail === email && u.password === password);
        if (user) {
          localStorage.setItem('currentUser', JSON.stringify(user));
          return true;
        } else {
          return false;
        }
      })
    );
  }
}

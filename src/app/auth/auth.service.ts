import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface UserNameAvailableResponse {
  available: boolean;
}
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  usernameAvailable(username: string) {
    return this.http.post<UserNameAvailableResponse>(
      'https://api.angular-email.com/auth/username',
      {
        username,
      }
    );
  }

  signup(credentials: any) {
    return this.http.post<any>(
      'https://api.angular-email.com/auth/signup',
      credentials
    );
  }
}

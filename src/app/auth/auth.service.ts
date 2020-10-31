import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface UserNameAvailableResponse {
  available: boolean;
}

interface SignupCredentials {
  username: string;
  password: string;
  passwordConfirmation: string;
}

interface SignupResponse {
  username: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  rootUrl = 'https://api.angular-email.com';

  constructor(private http: HttpClient) {}

  usernameAvailable(username: string) {
    return this.http.post<UserNameAvailableResponse>(
      `${this.rootUrl}/auth/username`,
      {
        username,
      }
    );
  }

  signup(credentials: SignupCredentials) {
    return this.http.post<SignupResponse>(
      `${this.rootUrl}/auth/signup`,
      credentials
    );
  }
}

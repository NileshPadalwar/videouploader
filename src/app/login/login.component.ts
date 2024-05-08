import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service'; // Import your API service here

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private apiService: ApiService, private router: Router) { }

  login() {
    
    if (!this.username || !this.password) {
      this.errorMessage = 'Please provide both username and password.';
      return;
    }

    
    this.apiService.login(this.username, this.password)
      .subscribe(
        (response: any) => {
          
          this.router.navigate(['/upload']);
        },
        (error: any) => {
          
          console.error('Login error:', error);
          this.errorMessage = 'Invalid username or password.';
        }
      );
  }
}

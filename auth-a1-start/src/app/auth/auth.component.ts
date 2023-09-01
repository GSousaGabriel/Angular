import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { UserData } from '../shared/interfaces/user-data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})
export class AuthComponent implements OnInit {
  isLoginMode = true;
  signupForm: FormGroup;
  error = ''

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'pass': new FormControl(null, [Validators.required, Validators.minLength(6)])
    })
  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit() {

    if (!this.signupForm.valid) {
      return
    }

    const email = this.signupForm.get('email').value
    const pass = this.signupForm.get('pass').value
    const userData = {
      email,
      pass
    }

    if (this.isLoginMode) {
      this.login(userData)
    } else {
      this.register(userData)
    }
  }

  register(userData: UserData) {
    this.authService.signUp(userData).subscribe({
      next: success => {
        console.log(success)
        this.signupForm.reset()
      },
      error: e => {
        this.error = e
      }
    })
  }

  login(userData: UserData) {
    this.authService.signIn(userData).subscribe({
      next: success => {
        console.log(success)
        this.signupForm.reset()
        this.router.navigateByUrl('/recipes')
      },
      error: e => {
        this.error = e
      }
    })
  }
}

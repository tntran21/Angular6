import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Builder } from 'protractor';
import { AuthenticationService } from '../service/auth.service'

// Validate cho form
import { Validators } from '@angular/forms';
/**
 * Custom Validation
 * Kiem tra dau cham cau
 */
function hasPunctuation(punctuation: string, errorType: string) {
  return function (input: FormControl) {
    return input.value.indexOf(punctuation) >= 0?
      null:
        {[errorType]: true};
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  userName: FormControl;
  password: FormControl;
  submited: false;
  invalidLogin: false;
  

  constructor(
    private _builder: FormBuilder,
    private _authService: AuthenticationService
  ) {}

  // constructor(_builder: FormBuilder) { 
  //   this.userName = new FormControl('', [
  //     // Validate cho username
  //     Validators.required,
  //     Validators.minLength(5)
  //   ]);
  //   this.password = new FormControl('', [
  //     Validators.required,
  //     hasPunctuation('&', 'ampersandRequired')
  //   ]);

  //   this.loginForm = _builder.group({
  //     userName: this.userName,
  //     password: this.password
  //   });
  // }

  ngOnInit() {
  }

  login() {
    console.log(this.loginForm.value);
  }
}

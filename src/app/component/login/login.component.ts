import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // attribute which decides initial state of hiding password
  hide: boolean = true;

  // attribute defining contents of a loginForm: email and password
  loginForm: FormGroup = this.fb.group({  
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  })

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
  }

  onLogin() {
    if (!this.loginForm.valid) {
      return;
    }
    console.log(this.loginForm.value);
    this.router.navigate(['/home']);
  }



}

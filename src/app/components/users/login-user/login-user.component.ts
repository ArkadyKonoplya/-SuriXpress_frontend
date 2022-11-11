import { HttpErrorResponse } from '@angular/common/http';
import { AuthResponseDto } from 'src/app/models/response/AuthResponseDto.model';
import { UserAuthenticationDto } from 'src/app/models/user/UserAuthenticationDto.model';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from './../../../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {
  private returnUrl: string | undefined;
  
  loginForm!: FormGroup;
  errorMessage: string = '';
  showError: boolean | undefined; 

  constructor(private authService: AuthenticationService, private router: Router, private route: ActivatedRoute) { }
  
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    })
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  validateControl = (controlName: string) => {
    return this.loginForm.get(controlName)!.invalid && this.loginForm.get(controlName)!.touched
  }

  hasError = (controlName: string, errorName: string) => {
    return this.loginForm.get(controlName)!.hasError(errorName)
  }
  
  loginUser = (loginFormValue: any) => {
    this.showError = false;
    const formValues = {... loginFormValue };

    const userForAuth: UserAuthenticationDto = {
      email: formValues.email,
      password: formValues.password
    }

    this.authService.loginUser('api/accounts/login', userForAuth)
    .subscribe({
      next: (res:AuthResponseDto) => {
       localStorage.setItem("token", res.token);
       this.authService.sendAuthStateChangeNotification(res.isAuthSuccessful);
       this.router.navigate([this.returnUrl]);
    },
    error: (err: HttpErrorResponse) => {
      this.errorMessage = err.message;
      this.showError = true;
    }})
  }
}


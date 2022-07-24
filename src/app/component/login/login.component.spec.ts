import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { ReactiveFormsModule, FormBuilder} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatDialog } from '@angular/material/dialog';
import { validUser, blank } from 'src/../mocks/index';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthenticationService } from 'app/services/authentication.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HotToastService } from '@ngneat/hot-toast';
import { Router } from '@angular/router';
import { get } from 'http';

// Defining Constants 
const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);
const loginServiceSpy = jasmine.createSpyObj('AuthenticationService',
                                             ['Auth']);
const hotToastServiceSpy = jasmine.createSpyObj('HotToastService',
                                             ['HotToast']);                                     
const testUserData = { id: 1, name: 'Jinwaye'};
const loginErrorMsg = 'Invalid Login';


describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let dialog: MatDialog;  

  // Ensure the component is successfully created (Boilerplate Test Case)
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule,
                ReactiveFormsModule, MatFormFieldModule, 
                MatIconModule, MatInputModule, MatDialog],
      providers: [
                  {provide: AuthenticationService, useValue: loginServiceSpy},
                  FormBuilder,
                  { provide: Router, useValue: routerSpy }
                ],
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(async(() => {
    component = new LoginComponent(loginServiceSpy, 
      routerSpy, dialog , hotToastServiceSpy );
  }));

  // Self defined function
  function updateForm(email: any, password: any) {
    component.loginForm.controls['username'].setValue(email);
    component.loginForm.controls['password'].setValue(password);
  }

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Component successfully created', () => {
    expect(component).toBeTruthy();
  });

  it('component initial state', () => {
    expect(component.loginForm).toBeDefined();
    expect(component.loginForm.invalid).toBeTruthy();
  });

  it('submitted should be true when submit()', () => {
    component.submit();
    expect(component.submit).toBeTruthy();
  });

  it('form value should update from when u change the input', (() => {
    updateForm(validUser.username, validUser.password);
    expect(component.loginForm.value).toEqual(validUser);
  }));

  it('Form invalid should be true when form is invalid', (() => {
    updateForm(blank.username, blank.password);
    expect(component.loginForm.invalid).toBeTruthy();
  }));

});

describe('Login Component Shallow Test', () => {

  let fixture: ComponentFixture<LoginComponent>;

  function updateForm(email: any, password: any) {
    fixture.componentInstance.loginForm.controls['username'].setValue(email);
    fixture.componentInstance.loginForm.controls['password'].setValue(password);
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule],
      providers: [
        {provide: AuthenticationService, useValue: loginServiceSpy}]})}))

      })
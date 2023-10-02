import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { ButtonComponent } from '@shared/components/button/button.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from '@core/services/auth/auth.service';
import { of } from 'rxjs';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { PagesRoutes } from '@core/constants/page-routes.constant';

const AuthServiceMocks = {
  signIn: () =>
    of({
      email: 'email@email.com',
      password: '123123',
    }),
};


describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent, ButtonComponent],
      imports: [RouterTestingModule, MatSnackBarModule, ReactiveFormsModule],
      providers: [
        { provide: AuthService, useValue: AuthServiceMocks },
      ],
      schemas: [NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to home page after successful sign-in', () => {
    const routerNavigateSpy = jest.spyOn(component['router'], 'navigate');

    component['_signIn']({ email: 'test@example.com', password: 'password' });

    expect(routerNavigateSpy).toHaveBeenCalledWith([PagesRoutes.HOME]);
  });
});

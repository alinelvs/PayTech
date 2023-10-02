import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AuthService } from '@core/services/auth/auth.service';
import { PagesRoutes } from '@core/constants/page-routes.constant';
import { of } from 'rxjs';

const AuthServiceMocks = {
  signIn: () =>
    of({
      email: 'email@email.com',
      password: '123123',
    }),
};

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let authService: AuthService;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        AuthGuard,
        { provide: AuthService, useValue: AuthServiceMocks },
        {
          provide: Router,
          useValue: {
            navigate: jest.fn(),
          } as any,
        },
      ],
    });

    guard = TestBed.inject(AuthGuard);
    authService = TestBed.inject(AuthService);
    router = TestBed.inject(Router);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

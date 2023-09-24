import { TestBed } from '@angular/core/testing';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  RouterStateSnapshot,
} from '@angular/router';

import { AuthGuard, IsAuthGuard } from './auth.guard';
import { AuthService } from '@core/services/auth/auth.service';

describe('authGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => IsAuthGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IsAuthGuard, AuthGuard]
    });
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });

  it('should return true when user is logged in', () => {
    const authService = new AuthService(true as any);
    const authGuard = new AuthGuard(authService);
    jest.spyOn(authService, 'isLoggedIn').mockReturnValue(true);

    const result = authGuard.canActivate(null as any, null as any);

    expect(result).toBe(true);
    expect(authService.isLoggedIn).toHaveBeenCalledTimes(1);
  });

  it('should return false when user is not logged in', () => {
    const authService = new AuthService(true as any);
    authService.isLoggedIn = jest.fn().mockReturnValue(false);
    const authGuard = new AuthGuard(authService);

    const result = authGuard.canActivate(null as any, null as any);

    expect(result).toBe(false);
  });
});

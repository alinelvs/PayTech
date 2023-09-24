import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateFn } from '@angular/router';
import { AuthService } from '@core/services/auth/auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard {

  constructor(private authService: AuthService){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      return this.authService.isLoggedIn();
  }

}
  export const IsAuthGuard: CanActivateFn =  (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean => {
    return inject(AuthGuard).canActivate(route, state);
  }

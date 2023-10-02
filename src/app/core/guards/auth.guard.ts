import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { PagesRoutes } from '@core/constants/page-routes.constant';
import { AuthService } from '@core/services/auth/auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private authService: AuthService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const account = this.authService.accountValue;
        if (account) {
            return true;
        }

        this.router.navigate([PagesRoutes.LOGIN], { queryParams: { returnUrl: state.url } });
        return false;
    }
}

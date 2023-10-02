import { Injectable } from '@angular/core';
import { StorageProvider } from '@core/providers/storage/models/storage.model';
import { map, Observable } from 'rxjs';
import { ErrorMessages } from '@core/constants/error-messages.constant';
import { IAccount } from '@core/interfaces/account.interface';
import { ApiService } from '@core/services/api/api.service';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly ACCESS_TOKEN_KEY = 'ACCESS_TOKEN';

  constructor(
    private apiService: ApiService,
    private storageProvider: StorageProvider
  ) {}

  public signIn(accountData: IAccount): Observable<IAccount> {
    return this.apiService
      .get<IAccount[]>(`/account?email=${accountData.email}`)
      .pipe(
        map((accounts) => {
          if (Array.isArray(accounts) && accounts.length > 0) {
            const account = accounts[0];
            if (this._verifyPassword(accountData.password, account.password)) {
              this.storageProvider.setItem(this.ACCESS_TOKEN_KEY, account);
              return account;
            } else {
              throw new Error(ErrorMessages.IncorrectPassword);
            }
          } else {
            throw new Error(ErrorMessages.AccountNotFound);
          }
        })
      );
  }
  public isLoggedIn() {
    return this.storageProvider.getItem(this.ACCESS_TOKEN_KEY) !== null;
  }
  public logout() {
    this.storageProvider.removeItem(this.ACCESS_TOKEN_KEY);
  }

  private _verifyPassword(
    passwordSent: string,
    passwordReceived: string
  ): boolean {
    if (passwordSent === passwordReceived) {
      return true;
    }

    return false;
  }
}

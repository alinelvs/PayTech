import { Injectable } from '@angular/core';
import { StorageProvider } from '@core/providers/storage/models/storage.model';
import { map, Observable, BehaviorSubject } from 'rxjs';
import { ErrorMessages } from '@core/constants/error-messages.constant';
import { IAccount } from '@core/interfaces/account.interface';
import { ApiService } from '@core/services/api/api.service';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public account: Observable<IAccount | null>;

  private _accountSubject: BehaviorSubject<IAccount | null>;
  private readonly ACCESS_TOKEN_KEY = 'ACCESS_TOKEN';

  constructor(
    private apiService: ApiService,
    private storageProvider: StorageProvider
  ) {
    this._accountSubject = new BehaviorSubject(this.storageProvider.getItem(this.ACCESS_TOKEN_KEY));
    this.account = this._accountSubject.asObservable();
  }

  public get accountValue() {
    return this._accountSubject.value;
  }

  public signIn(accountData: IAccount): Observable<IAccount> {
    return this.apiService
      .get<IAccount[]>(`/account?email=${accountData.email}`)
      .pipe(
        map((accounts) => {
          if (Array.isArray(accounts) && accounts.length > 0) {
            const account = accounts[0];
            if (this._verifyPassword(accountData.password, account.password)) {
              this.storageProvider.setItem(this.ACCESS_TOKEN_KEY, account);
              this._accountSubject.next(account);
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

  public logout() {
    this.storageProvider.clear();
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

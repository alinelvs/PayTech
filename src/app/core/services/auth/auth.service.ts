import { Injectable } from '@angular/core';
import { StorageProvider } from '@core/providers/storage/models/storage.model';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private storageProvider: StorageProvider) {}

  public signIn(userData: string) {
    this.storageProvider.setItem('ACCESS_TOKEN', userData);
  }
  public isLoggedIn() {
    return  this.storageProvider.getItem('ACCESS_TOKEN') !== null;
  }
  public logout() {
    this.storageProvider.removeItem('ACCESS_TOKEN');
  }
}

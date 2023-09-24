import { Injectable } from '@angular/core';
import { CryptoProvider } from '@core/providers/crypto/models/crypto.model';
import { StorageProvider } from '../models/storage.model';

@Injectable()
export class LocalStorageProvider extends StorageProvider {
  private readonly localStorage: Storage;

  constructor(private cryptoProvider: CryptoProvider) {
    super();
    this.localStorage = window.localStorage;
  }

  getItem<T>(key: string): T | null {
    const data = this.localStorage.getItem(key);
    return data ? (JSON.parse(this.cryptoProvider.decrypt(data)) as T) : null;
  }

  setItem(key: string, value: any): boolean {
    this.localStorage.setItem(
      key,
      this.cryptoProvider.encrypt(JSON.stringify(value))
    );
    return true;
  }

  removeItem(key: string): boolean {
    this.localStorage.removeItem(key);
    return true;
  }

  clear(): boolean {
    this.localStorage.clear();
    return true;
  }
}

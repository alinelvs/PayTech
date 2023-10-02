import { Injectable } from '@angular/core';

import { StorageProvider } from '../models/storage.model';

@Injectable()
export class StorageProviderMock extends StorageProvider {

  private localStorage: any = {};

  getItem<T>(key: string): T | null {
    if (key in this.localStorage) {
      return this.localStorage[key] as T;
    }

    return null;
  }

  setItem(key: string, value: any): boolean {
    this.localStorage[key] = value;
    return true;
  }

  removeItem(key: string): boolean {
    if (key in this.localStorage) {
      delete this.localStorage[key];
      return true;
    }

    return false;
  }

  clear(): boolean {
    this.localStorage = {}
    return true;
  }

}

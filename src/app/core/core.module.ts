import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { AESCryptoProvider } from '../core/providers/crypto/implementations/aes-crypto.provider';
import { CryptoProvider } from '../core/providers/crypto/models/crypto.model';
import { LocalStorageProvider } from '../core/providers/storage/implementations/local-storage.provider';
import { StorageProvider } from '../core/providers/storage/models/storage.model';

import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  imports: [AppRoutingModule, CommonModule, HttpClientModule, RouterModule],

  providers: [
    {
      provide: StorageProvider,
      useClass: LocalStorageProvider,
    },
    {
      provide: CryptoProvider,
      useClass: AESCryptoProvider,
    },
  ],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() core: CoreModule) {
    if (core) {
      throw new Error('You should import core module only in the root module');
    }
  }
}

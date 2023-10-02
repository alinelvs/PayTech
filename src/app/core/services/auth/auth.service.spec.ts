import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { StorageProvider } from '@core/providers/storage/models/storage.model';
import { StorageProviderMock } from '@core/providers/storage/mock/storage.mock';
import { IAccount } from '@core/interfaces/account.interface';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { ApiService } from '../api/api.service';

describe('AuthService', () => {
  let authService: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule
      ],
      providers: [
        ApiService,
        { provide: StorageProvider, useClass: StorageProviderMock },
      ],
    });

    authService = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(authService).toBeTruthy();
  });
});

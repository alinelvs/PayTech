import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { StorageProvider } from '@core/providers/storage/models/storage.model';
import { StorageProviderMock } from '@core/providers/storage/mock/storage.mock';

describe('AuthService', () => {
  let authService: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthService,
        { provide: StorageProvider, useClass: StorageProviderMock },
      ],
    });

    authService = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(authService).toBeTruthy();
  });

  it('should call the storage with user data', () => {
    jest.spyOn(authService['storageProvider'], 'setItem').mockImplementation();

    authService.signIn('test@test.com');

    expect(authService['storageProvider'].setItem).toHaveBeenCalled();
  });


  it('deve retornar os tokens salvos no storage', () => {
    jest.spyOn(authService['storageProvider'], 'getItem').mockImplementation();

    authService.isLoggedIn();

    expect(authService['storageProvider'].getItem).toHaveBeenCalledWith("ACCESS_TOKEN");
    // expect(authService['storageProvider'].getItem).toHaveBeenCalledWith("@ZenEmpresas:user:abc123:organization:1:alerts");

  });

  it('deve retornar os tokens salvos no storage', () => {
    jest.spyOn(authService['storageProvider'], 'removeItem').mockImplementation();

    authService.logout();

    expect(authService['storageProvider'].removeItem).toHaveBeenCalledWith("ACCESS_TOKEN");
    // expect(authService['storageProvider'].getItem).toHaveBeenCalledWith("@ZenEmpresas:user:abc123:organization:1:alerts");

  });
});

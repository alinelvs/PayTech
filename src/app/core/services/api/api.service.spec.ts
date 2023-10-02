import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ApiService } from './api.service';

describe('ApiService', () => {
  let service: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule,
      ],
      providers: [
        ApiService,
      ]
    });
    service = TestBed.inject(ApiService);
  });

  it('should create the service', () => {
    expect(service).toBeTruthy();
  });

  it('should call the GET resource', () => {
    jest.spyOn(service['httpClient'], 'get').mockImplementation();
    service.get('/fake', 'page=2');

    expect(service['httpClient'].get).toHaveBeenCalledWith('http://localhost:3000/fake?page=2');
  });

  it('should call the GET FILE resource', () => {
    jest.spyOn(service['httpClient'], 'get').mockImplementation();
    service.getFile('/fake', 'page=2');

    expect(service['httpClient'].get).toHaveBeenCalledWith(
      'http://localhost:3000/fake?page=2',
      { responseType: 'blob' }
    );
  });

  it('should call the POST resource', () => {
    jest.spyOn(service['httpClient'], 'post').mockImplementation();
    service.post('/fake', { id: 1 });

    expect(service['httpClient'].post).toHaveBeenCalledWith(
      'http://localhost:3000/fake',
      { id: 1 }
    );
  });

  it('should call the PUT resource', () => {
    jest.spyOn(service['httpClient'], 'put').mockImplementation();
    service.put('/fake', { id: 1 });

    expect(service['httpClient'].put).toHaveBeenCalledWith(
      'http://localhost:3000/fake',
      { id: 1 }
    );
  });

  it('should call the PATCH resource', () => {
    jest.spyOn(service['httpClient'], 'patch').mockImplementation();
    service.patch('/fake', { id: 1 });

    expect(service['httpClient'].patch).toHaveBeenCalledWith(
      'http://localhost:3000/fake',
      { id: 1 }
    );
  });

  it('should call the DELETE resource', () => {
    jest.spyOn(service['httpClient'], 'delete').mockImplementation();
    service.delete('/fake');

    expect(service['httpClient'].delete).toHaveBeenCalledWith('http://localhost:3000/fake');
  });
});

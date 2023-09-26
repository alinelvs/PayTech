import { ApiService } from '@core/services/api/api.service';
import { TestBed } from '@angular/core/testing';

import { PaymentService } from './payments.service';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';

describe('PaymentsService', () => {
  let service: PaymentService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [ApiService],
    });
    service = TestBed.inject(PaymentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an Observable with payment data', () => {
    jest.spyOn(service['apiService'], 'get').mockImplementation();
    service.getPayments();
    expect(service['apiService'].get).toHaveBeenCalledWith('/payment');
  });

});

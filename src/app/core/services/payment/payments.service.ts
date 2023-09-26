import { ApiService } from '@core/services/api/api.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPayment } from '@core/interfaces/payment.interface';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  constructor(private apiService: ApiService) {}

  getPayments(): Observable<IPayment[]> {
    return this.apiService.get<IPayment[]>(`/payment`);
  }
}

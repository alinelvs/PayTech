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

  createPayment(body: IPayment) {
    return this.apiService.post<IPayment>(`/payment`, body)
  }

  editPayment(body: IPayment) {
    return this.apiService.put<IPayment>(`/payment/${body.id}`, body)
  }

  deletePayment(paymentId: number): Observable<{}> {
    return this.apiService.delete<{}>(`/payment/${paymentId}`);
  }
}

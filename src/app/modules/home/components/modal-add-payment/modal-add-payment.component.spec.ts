import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddPaymentComponent } from './modal-add-payment.component';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';

import { of } from 'rxjs';
import { PaymentService } from '@core/services/payment/payments.service';
import { ReactiveFormsModule } from '@angular/forms';

const PaymentServiceMocks = {
  createPayment: () =>
    of({
      id: 1,
      name: 'Account Test',
    }),
};

describe('ModalAddPaymentComponent', () => {
  let component: ModalAddPaymentComponent;
  let fixture: ComponentFixture<ModalAddPaymentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalAddPaymentComponent],
      imports: [MatDialogModule, ReactiveFormsModule],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: PaymentService, useValue: PaymentServiceMocks },
        {
          provide: MatDialogRef,
          useValue: { close: (params: any) => {}, beforeClosed: () => of() },
        },
      ],
    });
    fixture = TestBed.createComponent(ModalAddPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

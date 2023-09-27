import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddPaymentComponent } from './modal-add-payment.component';

describe('ModalAddPaymentComponent', () => {
  let component: ModalAddPaymentComponent;
  let fixture: ComponentFixture<ModalAddPaymentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalAddPaymentComponent]
    });
    fixture = TestBed.createComponent(ModalAddPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

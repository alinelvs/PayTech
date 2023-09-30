import { PaymentService } from '@core/services/payment/payments.service';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormGroupDirective,
  Validators,
} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { IPayment } from '@core/interfaces/payment.interface';
import { Subject, takeUntil } from 'rxjs';
import CustomValidators from '@shared/utils/custom-validators/custom-validators';
import { formatDateForDatabase } from '@shared/utils/functions/functions';

@Component({
  templateUrl: './modal-add-payment.component.html',
  styleUrls: ['./modal-add-payment.component.scss'],
})
export class ModalAddPaymentComponent implements OnInit {
  public form!: FormGroup;

  private unsubscribe$: Subject<void> = new Subject<void>();

  constructor(
    private formBuilder: FormBuilder,
    private paymentService: PaymentService,
    public dialogRef: MatDialogRef<ModalAddPaymentComponent>
  ) {}

  ngOnInit(): void {
    this._formBuilder();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  public onClose() {
    this.dialogRef.close();
  }

  public onSubmit(form: FormGroupDirective) {
    if (form.valid) {
      this._addPayment(form.value);
    }
  }

  private _addPayment(data: IPayment) {
    data.date = formatDateForDatabase(data.date);

    this.paymentService
      .createPayment(data)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe({
        complete: () => {
          this.form.reset();
          this.onClose();
        },
      });
  }

  private _formBuilder() {
    this.form = this.formBuilder.group({
      name: [null, [Validators.required]],
      username: [null, [Validators.required]],
      title: [null, [Validators.required]],
      value: [null, [Validators.required]],
      date: [null, [Validators.required, CustomValidators.date]],
      isPayed: [false, [Validators.required]],
    });
  }
}

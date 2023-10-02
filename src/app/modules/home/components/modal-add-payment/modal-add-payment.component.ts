import { PaymentService } from '@core/services/payment/payments.service';
import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormGroupDirective,
  Validators,
} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IPayment } from '@core/interfaces/payment.interface';
import { Subject, takeUntil } from 'rxjs';
import CustomValidators from '@shared/utils/custom-validators/custom-validators';
import {
  formatDateForDatabase,
  formatToBrazilianDate,
} from '@shared/utils/functions/functions';

@Component({
  templateUrl: './modal-add-payment.component.html',
  styleUrls: ['./modal-add-payment.component.scss'],
})
export class ModalAddPaymentComponent implements OnInit {
  public form!: FormGroup;
  public currentEditPayment!: IPayment;

  private _unsubscribe$: Subject<void> = new Subject<void>();

  constructor(
    private formBuilder: FormBuilder,
    private paymentService: PaymentService,
    public dialogRef: MatDialogRef<ModalAddPaymentComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: {
      currentEditPayment: IPayment;
    }
  ) {}

  ngOnInit(): void {
    this._verifyIsEditPayment();
    this._formBuilder();
    this._updateEditForm();
  }

  ngOnDestroy(): void {
    this._unsubscribe$.next();
    this._unsubscribe$.complete();
  }

  public onClose() {
    this.dialogRef.close();
  }

  public onSubmit(form: FormGroupDirective) {
    if (form.valid) {
      const payment = form.value;
      this.currentEditPayment
        ? this._editPayment(payment)
        : this._addPayment(payment);
    }
  }

  private _addPayment(data: IPayment) {
    data.date = formatDateForDatabase(data.date);
    data.image = `https://robohash.org/${data.name}.png?size=150x150&set=set4`;

    this.paymentService
      .createPayment(data)
      .pipe(takeUntil(this._unsubscribe$))
      .subscribe({
        complete: () => {
          this.form.reset();
          this.onClose();
        },
      });
  }

  private _editPayment(data: IPayment) {
    data.date = formatDateForDatabase(data.date);
    this.paymentService
      .editPayment(data)
      .pipe(takeUntil(this._unsubscribe$))
      .subscribe({
        complete: () => {
          this.form.reset();
          this.onClose();
        },
      });
  }

  private _formBuilder() {
    this.form = this.formBuilder.group({
      id: [null],
      image: [null],
      name: [null, [Validators.required]],
      username: [null, [Validators.required]],
      title: [null, [Validators.required]],
      value: [null, [Validators.required]],
      date: [null, [Validators.required, CustomValidators.date]],
      isPayed: [false, [Validators.required]],
    });
  }

  private _updateEditForm() {
    if (this.currentEditPayment) {
      this.form.patchValue(this.currentEditPayment);

      const { date } = this.currentEditPayment;
      const formattedDate = formatToBrazilianDate(date);

      if (formattedDate) {
        this.form.get('date')?.setValue(formattedDate);
      }
    }
  }

  private _verifyIsEditPayment() {
    if (this.data && this.data.currentEditPayment) {
      this.currentEditPayment = this.data.currentEditPayment;
    }
  }
}

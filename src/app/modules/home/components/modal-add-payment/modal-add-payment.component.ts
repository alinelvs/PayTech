import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormGroupDirective,
  Validators,
} from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  templateUrl: './modal-add-payment.component.html',
  styleUrls: ['./modal-add-payment.component.scss'],
})
export class ModalAddPaymentComponent implements OnInit {
  public form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<ModalAddPaymentComponent>
  ) {}

  ngOnInit(): void {
    this._formBuilder()
  }

  public onClose() {
    this.dialogRef.close();
  }

  public onSubmit(form: FormGroupDirective) {
    console.log(form.value);
  }

  private _formBuilder() {
    this.form = this.formBuilder.group({
      name: [null, [Validators.required]],
      username: [null, [Validators.required]],
      title: [null, [Validators.required]],
      value: [null, [Validators.required]],
      date: [null, [Validators.required]],
      isPayed: [false, [Validators.required]],
    });
  }

}

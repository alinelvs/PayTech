import { AbstractControl } from '@angular/forms';

export default class CustomValidators {
  static date(control: AbstractControl) {
    if (control?.value === '' || !control?.value) return null;

    const ptDatePattern =
      /^(0?[1-9]|[12][\d]|3[01])\/(0?[1-9]|1[012])\/((?:19|20)[\d][\d])$/g;

    if (!control?.value?.match(ptDatePattern)) return { dateInvalid: true };

    return null;
  }
}

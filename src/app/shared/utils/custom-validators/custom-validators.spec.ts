import { TestBed } from '@angular/core/testing';
import { FormControl, FormGroup } from '@angular/forms';
import CustomValidators from '@shared/utils/custom-validators/custom-validators';

describe('CustomValidators', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should test date validator', () => {
    const form = new FormGroup({
      date: new FormControl(),
    });

    form.patchValue({ date: '05/22/1997' });
    expect(CustomValidators.date(form.controls.date)).toEqual({dateInvalid: true});

    form.patchValue({ date: '35/10/1997' });
    expect(CustomValidators.date(form.controls.date)).toEqual({dateInvalid: true});

    form.patchValue({ date: '05/02/1997' });
    expect(CustomValidators.date(form.controls.date)).toBeNull();

    form.patchValue({ date: '30/12/1999' });
    expect(CustomValidators.date(form.controls.date)).toBeNull();

    form.patchValue({ date: '07/07/2022' });
    expect(CustomValidators.date(form.controls.date)).toBeNull();

    form.patchValue({ date: '10/10/2010' });
    expect(CustomValidators.date(form.controls.date)).toBeNull();

    form.patchValue({ date: '12/12/2022' });
    expect(CustomValidators.date(form.controls.date)).toBeNull();

    form.patchValue({ date: '24/09/2000' });
    expect(CustomValidators.date(form.controls.date)).toBeNull();

  });

});

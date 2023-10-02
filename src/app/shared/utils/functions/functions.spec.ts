import { registerLocaleData } from '@angular/common';
import { LOCALE_ID } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import localePt from '@angular/common/locales/pt';
import * as utils from './functions';

registerLocaleData(localePt);

describe('Functions', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: LOCALE_ID, useValue: 'pt' }],
    });
  });

  it('should format the date to database format', () => {
    expect(utils.formatDateForDatabase('02/10/2021')).toEqual('2021-10-02T00:00:00');
  });

  it('should format to Brazilian date', () => {
    expect(utils.formatToBrazilianDate('')).toEqual('');
    expect(utils.formatToBrazilianDate('2020-10-22T23:11:000')).toEqual('22/10/2020');
    expect(utils.formatToBrazilianDate('10/02/2021')).toEqual('10/02/2021');
  });
});

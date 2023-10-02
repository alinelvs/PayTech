import { AuthService } from '@core/services/auth/auth.service';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormGroupDirective,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { PagesRoutes } from '@core/constants/page-routes.constant';
import { Subject, takeUntil } from 'rxjs';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';

@Component({
  selector: 'paytech-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public form!: FormGroup;

  private _unsubscribe$: Subject<void> = new Subject<void>();

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router,
    private _snackBar: MatSnackBar,
  ) {}

  ngOnInit(): void {
    this._formBuilder();
  }

  ngOnDestroy(): void {
    this._unsubscribe$.next();
    this._unsubscribe$.complete();
  }

  public onSubmit(form: FormGroupDirective) {
    if (form.valid) {
      const userData = form.value;
      this._signIn(userData);
    }
  }

  private _signIn(data: any) {
    this.authService
      .signIn(data)
      .pipe(takeUntil(this._unsubscribe$))
      .subscribe({
        next: () => {
          this.router.navigate([PagesRoutes.HOME]);
        },
        error: (error: Error) => {
          this.form.reset();
          this._snackBar.open(error.message, 'fechar', {
            duration: 3000
          });

        },
      });
  }

  private _formBuilder() {
    this.form = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
    });
  }
}

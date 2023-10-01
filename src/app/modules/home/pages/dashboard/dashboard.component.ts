import { AfterViewInit, Component, OnDestroy, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { PaymentService } from '@core/services/payment/payments.service';
import { IPayment } from '@core/interfaces/payment.interface';
import { Subject, takeUntil } from 'rxjs';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalAddPaymentComponent } from '@modules/home/components/modal-add-payment/modal-add-payment.component';

@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements AfterViewInit, OnDestroy {
  public dataSource = new MatTableDataSource<IPayment>();
  public displayedColumns: string[] = [
    'avatar',
    'name',
    'username',
    'title',
    'value',
    'date',
    'status',
    'edit',
    'delete',
  ];

  private unsubscribe$: Subject<void> = new Subject<void>();

  constructor(
    private _liveAnnouncer: LiveAnnouncer,
    private paymentService: PaymentService,
    private dialog: MatDialog
  ) {}

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this._getPayments();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  public announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  public onDelete(id: number): void {
    this.paymentService
      .deletePayment(id)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe({
        next: () => this._getPayments(),
      });
  }

  public onAdd() {
    const dialog = this.dialog.open(ModalAddPaymentComponent);
    dialog
      .afterClosed()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe({
        next: () => this._getPayments()
      });
  }

  public onEdit(payment: IPayment) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.data = {
      currentEditPayment: payment
    }

    const dialog = this.dialog.open(ModalAddPaymentComponent, dialogConfig);
    dialog
      .afterClosed()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe({
        next: () => this._getPayments()
      });
  }

  private _getPayments() {
    this.paymentService
      .getPayments()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe({
        next: (res) => {
          if (res) {
            this.dataSource = new MatTableDataSource<IPayment>(res);
            this.dataSource.sort = this.sort;
            this.dataSource.paginator = this.paginator;
          }
        },
      });
  }
}

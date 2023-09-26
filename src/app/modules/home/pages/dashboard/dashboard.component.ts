import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { PaymentService } from '@core/services/payment/payments.service';
import { IPayment } from '@core/interfaces/payment.interface';



@Component({
  selector: 'paytech-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'name', 'username', 'title', 'value', 'date', 'status', 'edit', 'delete'];
  dataSource = new MatTableDataSource<IPayment>;

  constructor(
    private _liveAnnouncer: LiveAnnouncer,
    private paymentService: PaymentService,
  ) {}

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this._getPayments();
  }

  public announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  private _getPayments() {
    this.paymentService.getPayments().subscribe({
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

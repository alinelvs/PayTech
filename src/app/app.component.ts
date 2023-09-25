import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'paytech';

  constructor(private router: Router) {}

  public hasRoute(route: string, exactly?: boolean): boolean {
    if (exactly) {
      return this.router.url.endsWith(route);
    }

    return this.router.url.includes(route);
  }
}

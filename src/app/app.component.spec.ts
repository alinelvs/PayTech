import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let app: AppComponent;
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    declarations: [AppComponent]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should check if route is current', () => {
    expect(app.hasRoute('auth')).toBeFalsy();
  });

  it('should check if route is current and exactly', () => {
    expect(app.hasRoute('auth', true)).toBeFalsy();
  });
});

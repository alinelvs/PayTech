import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { SidebarComponent } from './sidebar.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { StorageProvider } from '@core/providers/storage/models/storage.model';
import { StorageProviderMock } from '@core/providers/storage/mock/storage.mock';
import { IPageMenu } from '@core/interfaces/page-menu';
import { Subject } from 'rxjs';

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SidebarComponent],
      imports: [RouterTestingModule, HttpClientModule],
      providers: [{ provide: StorageProvider, useClass: StorageProviderMock }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);

    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should select the menu by URL on NavigationEnd event', () => {
    const menuUrl = '/example';
    const navigationEndEvent = new NavigationEnd(1, menuUrl, menuUrl);

    jest.spyOn(component, 'selectMenuByUrl');

    (router.events as Subject<any>).next(navigationEndEvent);

    expect(component.selectMenuByUrl).toHaveBeenCalledWith(menuUrl);
  });

  it('should correctly set the selected menu and current URL', () => {
    const menuUrl = '/example';
    const subMenu: IPageMenu = {
      name: 'Example',
      url: 'example',
      isActive: false,
    } as any;
    const menu: IPageMenu = { name: 'Menu', subMenus: [subMenu] } as any;
    component.menus = [menu];

    component.selectMenuByUrl(menuUrl);

    expect(component.selectedMenu).toEqual(menu);
    expect(component.currentUrl).toBe(menuUrl);
    expect(menu.isActive).toBe(true);
  });

  it('should correctly close other menus', () => {
    const selectedMenu = { name: 'Menu 1', isActive: true } as any;
    const otherMenu1 = { name: 'Menu 2', isActive: true };
    const otherMenu2 = { name: 'Menu 3', isActive: true };
    component.menus = [selectedMenu, otherMenu1, otherMenu2];

    component.closeOtherMenus(selectedMenu);

    expect(otherMenu1.isActive).toBe(false);
    expect(otherMenu2.isActive).toBe(false);
  });

  it('should toggle the menu correctly', () => {
    const menu = {
      name: 'Menu 1',
      subMenus: [{ name: 'SubMenu', isActive: false }],
    } as any;
    component.toggleMenu(menu);

    expect(menu.isActive).toBe(true);
    expect(menu.subMenus[0].isActive).toBe(false);
  });
});

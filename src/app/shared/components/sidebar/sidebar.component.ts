import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { IPageMenu } from '@core/interfaces/page-menu.interface';
import { pageMenu } from '@core/constants/page-menu.constant';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  public menus = pageMenu;
  public currentUrl: string = '';

  public isFreeTrial = false;
  public hasPlanEssentialOrAdvanced = false;
  public showWidget = false;

  selectedMenu: IPageMenu | null = null;

  constructor(public router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.selectMenuByUrl(event.url);
      }
    });

    this.selectMenuByUrl(this.router.url);
  }

  closeOtherMenus(selectedMenu: IPageMenu | null): void {
    this.menus.forEach((menu) => {
      if (menu !== selectedMenu) {
        menu.isActive = false;
      }
    });
  }

  toggleMenu(menu: IPageMenu | null): void {
    if (menu?.subMenus && menu?.subMenus.length > 0) {
      menu.isActive = !menu.isActive;
      this.closeOtherMenus(menu);
    }
  }

  selectMenuByUrl(url: string): void {
    let selected: IPageMenu | null = null;
    const urlWithoutSlash = url.replace('/', '');
    this.menus.forEach((menu) => {
      menu.subMenus?.forEach((subMenu) => {
        if (subMenu.url === urlWithoutSlash) {
          menu.isActive = true;
          selected = menu;
        }
      });
    });

    this.selectedMenu = selected;
    this.currentUrl = url;
  }
}

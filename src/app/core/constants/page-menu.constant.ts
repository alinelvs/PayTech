import { IPageMenu } from "@core/interfaces/page-menu.interface";
import { PagesRoutes } from "./page-routes.constant";

export const pageMenu: IPageMenu[] = [
  {
    title: 'Finanças',
    subMenus: [
      {
        title: 'Pagamentos',
        url: PagesRoutes.HOME,
      },
    ],
  },

  {
    title: 'Sistemas',
    subMenus: [
      {
        title: 'Logout',
        url: PagesRoutes.LOGIN,
      },
    ],
  },

];

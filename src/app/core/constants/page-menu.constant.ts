import { IPageMenu } from "@core/interfaces/page-menu";
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

];

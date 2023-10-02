export interface IPageMenu {
  title: string;
  url?: string;
  subMenus?: Array<IPageMenu>;
  isActive?: boolean;
  onClick?: boolean;
}

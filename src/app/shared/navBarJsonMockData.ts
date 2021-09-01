import { MenuItem } from "primeng/api";
import * as constants from './constants'


  //HOME ------------------------------------------

  //RAIZ
  const HOME_MENU: MenuItem = {
    label: constants.NavBar_Menu_lbl_HomeRoot,
    routerLink: ['/home']
  };

  //SALE ------------------------------------------

  //RAIZ
  const SALE_MENU: MenuItem = {
    label: constants.NavBar_Menu_lbl_SaleRoot,
    routerLink: ['/sale']
  };

  //PRODUCT ---------------------------------------

  const ProductAdminMenu: MenuItem = {
    label: constants.NavBar_Menu_lbl_ProductsAdmin,
    routerLink: ['/product/admin']
  };


  const ProductInfoMenu: MenuItem = {
    label: constants.NavBar_Menu_lbl_ProductsInfo,
    routerLink: ['/product/info']
  };

  const ProductReportMenu: MenuItem = {
    label: constants.NavBar_Menu_lbl_ProductsReport,
    routerLink: ['/product/report']
  };
  //RAIZ
  const PRODUCTS_MENU: MenuItem = {
    label: constants.NavBar_Menu_lbl_ProductsRoot,
    items: [
      ProductAdminMenu,
      ProductInfoMenu,
      ProductReportMenu
    ]
  };

  //COSTUMER --------------------------------------

  const CostumersInfoMenu: MenuItem = {
    label: constants.NavBar_Menu_lbl_CostumersInfo,
    routerLink: ['/costumer/info']
  };

  const CostumersAdmMenu: MenuItem = {
    label: constants.NavBar_Menu_lbl_CostumersAdm,
    routerLink: ['/costumer/adm']
  };

  //RAIZ
  const COSTUMER_MENU: MenuItem = {
    label: constants.NavBar_Menu_lbl_CostumersRoot,
    items: [
      CostumersAdmMenu,
      CostumersInfoMenu
    ]
  };




  export const MENU1: MenuItem[] = [
    HOME_MENU,
    SALE_MENU,
    PRODUCTS_MENU,
    COSTUMER_MENU
  ]

  export const MENU2: MenuItem[] = [
    HOME_MENU
  ]


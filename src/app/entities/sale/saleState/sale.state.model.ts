import { Costumer } from "../../costumer/costumerState/costumer.state.model";
import { Product } from "../../product/productState/product.state.model";


export interface SaleStateModel{
    costumer: Costumer | null;
    lastOrder: Product[] | null;
    order: Product[] | null;
    deliveryDate: Date | null;
    amount: number | null;
}
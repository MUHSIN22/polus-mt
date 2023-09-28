import { IProduct } from "../pages/products.types";

export type IProductRootState = {
    cart: ICartItem[],
    searchQuery: string;
}

export type ICartItem = IProduct & {
    count: number;
}
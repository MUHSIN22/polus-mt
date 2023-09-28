import { IProduct } from "../pages/products.types";

export type IProductRootState = {
    cart: ICartItem[]
}

export type ICartItem = IProduct & {
    count: number;
}
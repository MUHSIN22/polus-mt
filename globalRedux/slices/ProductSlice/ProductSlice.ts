import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IProductRootState } from "../../../types/redux/productSlice.types";
import { IProduct } from "../../../types/pages/products.types";
import { count } from "console";

const initialState: IProductRootState = {
    cart: []
}

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addProduct: (state: IProductRootState, {payload}: PayloadAction<IProduct>) => {
            const existingProduct = state.cart.find((product) => product.id === payload.id);
            if(existingProduct){
                existingProduct.count += 1
            }else{
                state.cart.push({
                    ...payload,
                    count: 1
                })
            }
        },
        changeQuantity: (state: IProductRootState, {payload}: PayloadAction<{dir: 'add' | 'dec'; data: IProduct}>) => {
            const product = state.cart.find(product => product.id === payload.data.id);
            
            if(!product && payload.dir === 'add'){
                state.cart.push({
                    ...payload.data,
                    count: 1
                })
            }else if(payload.dir === 'add'){
                product.count += 1;
            }else if(payload.dir === 'dec' && product?.count){
                if(product?.count === 1){
                    state.cart = state.cart.filter(product => product.id !== payload.data.id)
                }else if(product.count !== 0){
                    product.count -= 1;
                }
            }
        },
        deleteCartItem : (state: IProductRootState, {payload}: PayloadAction<number>) => {
            state.cart = state.cart.filter(product => product.id !== payload)
        }
    }
})

export const {addProduct,changeQuantity, deleteCartItem} = productSlice.actions;

export default productSlice.reducer;
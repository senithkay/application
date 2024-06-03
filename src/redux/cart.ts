import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface Gem {
    _id:string;
    name: string;
    description: string;
    color: string;
    image:string;
    price:number;
    treatments:Array<string>;
    shape:string;
    gemType:string;
}

export interface CartItem {
    _id:string;
    gemId: Gem;
    isDefaultPrice:boolean;
    price:number
}

interface CartState {
    cart: CartItem[];
}

const initialState: CartState = {
    cart: [],
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartItem>) => {
            state.cart.push(action.payload);
        },
        initCart: (state, action: PayloadAction<CartItem[]>) => {
            state.cart = action.payload;
        },
        removeFromCart:(state, action: PayloadAction<string>) => {
            state.cart = state.cart.filter((item) => item._id !== action.payload);
        },
    }
})

export default cartSlice.reducer;
export const {addToCart, initCart, removeFromCart} = cartSlice.actions;
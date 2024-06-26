import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface Backdrop {
    show:boolean;
}

interface BackdropState {
    backdrop: Backdrop;
}

const initialState: BackdropState = {
    backdrop: {
        show:false
    },
}

export const backdropSlice = createSlice({
    name: "backdropSlice",
    initialState,
    reducers: {
        showHideLoading: (state, action: PayloadAction<Backdrop>) => {
            state.backdrop = action.payload;
        }
    }
})

export default backdropSlice.reducer;
export const {showHideLoading} = backdropSlice.actions;
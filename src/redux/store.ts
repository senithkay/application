import {configureStore} from "@reduxjs/toolkit";
import {authSlice} from "@/redux/auth";
import {notificationSlice} from "@/redux/notification";
import {userNotificationSlice} from "@/redux/userNotification";
import {cartSlice} from "@/redux/cart";
import {backdropSlice} from "@/redux/loading";

const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        notifications: notificationSlice.reducer,
        userNotifications: userNotificationSlice.reducer,
        cart: cartSlice.reducer,
        backdrop: backdropSlice.reducer,
    }
});

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


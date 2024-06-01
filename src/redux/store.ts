import {configureStore} from "@reduxjs/toolkit";
import {authSlice} from "@/redux/auth";
import {notificationSlice} from "@/redux/notification";
import {userNotificationSlice} from "@/redux/userNotification";

const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        notifications: notificationSlice.reducer,
        userNotifications: userNotificationSlice.reducer,
    }
});

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


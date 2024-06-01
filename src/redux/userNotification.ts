import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface UserNotification {
    id:string;
    title:string;
    description:string;
    isBroadCasted:boolean;
    read:boolean;
}

interface UserNotificationState {
    userNotification: UserNotification[];
}

const initialState: UserNotificationState = {
    userNotification: [],
}

export const userNotificationSlice = createSlice({
    name: "userNotification",
    initialState,
    reducers: {
        initUserNotifications: (state, action: PayloadAction<UserNotification[]>) => {
            state.userNotification = action.payload;
        }
    }
})

export default userNotificationSlice.reducer;
export const {initUserNotifications} = userNotificationSlice.actions;
import axios from "axios";
import store from "@/redux/store";
import {authenticate} from "@/redux/auth";
import {showHide} from "@/redux/notification";
import {NOTIFICATION_TYPES, RESPONSE_STATUS} from "@/utils/enums";
import {initUserNotifications} from "@/redux/userNotification";

interface INotification {
    _id: string;
    title: string;
    description: string;
    isBroadCasted: boolean;
    read: boolean;
}

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000/',
    headers: {
        'Content-Type': 'application/json',
    },
});

axiosInstance.interceptors.request.use(
    (config) => {
        // You can modify the request config here, e.g., add authentication headers
        // config.headers.Authorization = `Bearer ${getToken()}`;
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (response) => {
        const requestedUrl = response.config.url;
        if (requestedUrl === '/auth/login' && response.status === 200) {
            const user = response.data.data;
            store.dispatch(authenticate({
                isAuthenticated: true,
                email: user.email,
                id: user._id,
                name: user.username,
                image: user.image
            }))
            const notifications = user.notifications.map((notification:INotification)=>{
                return {
                    id: notification._id,
                    title:notification.title,
                    description:notification.description,
                    isBroadCasted:notification.isBroadCasted,
                    read:notification.read
                }
            })
            store.dispatch(initUserNotifications(notifications));
        }
        return response.data;
    },
    (error) => {
        const requestedUrl = error.response.config.url;
        if (error.response.status === 401) {
            handle401(requestedUrl)
        }

        return errorResponse
    }
);

const handle401 = (requestedUrl:string)=>{
    if (requestedUrl === '/auth/login') {
        store.dispatch(showHide({
            type:NOTIFICATION_TYPES.ERROR,
            message:'Incorrect Username or password',
            show:true
        }))
    }
    else{
        store.dispatch(authenticate({
            isAuthenticated:false,
            email: undefined,
            id: undefined,
            name:undefined,
            image:undefined
        }))
    }
}

const errorResponse = {
    status : RESPONSE_STATUS.ERROR,
    data : {},
    description : ""
};

export default axiosInstance;
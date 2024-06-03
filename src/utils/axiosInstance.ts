import axios from "axios";
import store from "@/redux/store";
import {authenticate} from "@/redux/auth";
import {showHide} from "@/redux/notification";
import {NOTIFICATION_TYPES, RESPONSE_STATUS} from "@/utils/enums";
import {initUserNotifications} from "@/redux/userNotification";
import {initCart} from "@/redux/cart";

interface INotification {
    _id: string;
    title: string;
    description: string;
    isBroadCasted: boolean;
    read: boolean;
}

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

export interface WishListItem {
    _id:string;
    gemId: Gem;
    isDefaultPrice:boolean;
    price:number
}

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000/',
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials:true
});

axiosInstance.interceptors.request.use(
    (config) => {
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
            const cart = user.wishList.map((wishListItem: WishListItem)=>{
                return {
                    _id: wishListItem._id,
                    gemId: wishListItem.gemId,
                    isDefaultPrice:wishListItem.isDefaultPrice,
                    price:wishListItem.price,
                }
            })
            store.dispatch(initCart(cart));
        }
        return response.data;
    },
    (error) => {
        const requestedUrl = error.response.config.url;
        const requestedMethod = error.response.config.method;
        if (error.response.status === 401) {
            handle401(requestedUrl, requestedMethod, error.response.data.description)
        }

        return errorResponse
    }
);

const handle401 = (requestedUrl:string, requestedMethod:string, description:string)=>{
    if (requestedUrl !== '/auth/login') {
        store.dispatch(authenticate({
            isAuthenticated:false,
            email: undefined,
            id: undefined,
            name:undefined,
            image:undefined
        }))

    }
    else if (requestedMethod.toUpperCase() === 'POST'){
        store.dispatch(showHide({
            type:NOTIFICATION_TYPES.ERROR,
            message:description,
            show:true
        }))
    }
}

const errorResponse = {
    status : RESPONSE_STATUS.ERROR,
    data : {},
    description : ""
};

export default axiosInstance;
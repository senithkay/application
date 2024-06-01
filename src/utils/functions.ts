import {ClassValue, clsx} from "clsx";
import {twMerge} from "tailwind-merge";

const SERVER_IMAGES_BASE_URL = "http://localhost:3000/images";

export const wait = (time:number)=> {
    return new Promise(resolve => setTimeout(resolve, time));
}

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const getServerImagesUrl = (name:string)=>{
    return `${SERVER_IMAGES_BASE_URL}/${name}`;
}
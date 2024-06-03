'use client';
import Link from "next/link";
import Image from "next/image";
import {Button} from "@mui/material";
import Divider from "@mui/material/Divider";
import axiosInstance from "@/utils/axiosInstance";
import {NOTIFICATION_TYPES, RESPONSE_STATUS} from "@/utils/enums";
import store from "@/redux/store";
import {showHide} from "@/redux/notification";
import {useAppDispatch, useAppSelector} from "@/redux/hooks";
import {addToCart} from "@/redux/cart";

interface Props {
    image:string,
    title:string,
    shape:string,
    color:string,
    gemType: string,
    id:string,
    treatments:string[],
    price:number
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

export interface CartItem {
    _id:string;
    gemId: Gem;
    isDefaultPrice:boolean;
    price:number
}

const GemsCard = ({image, title, shape , color, gemType, id, treatments, price}: Props)=>{
    const auth = useAppSelector(state => state.auth.auth)
    const dispatch = useAppDispatch();
    const handleAddToCart = ()=>{
        if (!auth.isAuthenticated){
            dispatch(showHide({
                type:NOTIFICATION_TYPES.ERROR,
                message:'You Have to Be Logged In to Add Items To Your Wish List',
                show:true
            }))
            return
        }
        axiosInstance.post('/wishList', {
            gemId: id,
        })
            .then((response)=>{
                if (response.status === RESPONSE_STATUS.SUCCESS){
                    store.dispatch(showHide({
                        type:NOTIFICATION_TYPES.SUCCESS,
                        message:'Item Added to Wish List',
                        show:true
                    }))
                    const cartItem:CartItem = response.data
                    store.dispatch(addToCart(cartItem))
                }
            })
    }
    return (
        <div
            key={id}
            className="bg-white dark:bg-gray-950 rounded-lg shadow-sm overflow-hidden"
        >
            <Link key={id} href="/shop/[id]" as={`/shop/${id}?type=${gemType}&name=${title}&color=${color}&shape=${shape}&treatments=${JSON.stringify(treatments)}&price=${price}&image=${image}`}>
            <Image
                    alt="Product Image"
                    className="object-cover w-full h-60 group-hover:opacity-50 transition-opacity"
                    height={300}
                    src={image}
                    style={{
                        objectFit: "cover",
                    }}
                    width={400}
                />
            </Link>
            <div className="p-4">
                <h3 className="text-lg font-semibold">{title}</h3>
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <span>{shape}</span>
                    <Divider orientation="vertical" className="h-4"/>
                    <span>{color}</span>
                    <Divider orientation="vertical" className="h-4"/>
                    <span>{gemType}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mt-2">
                    {treatments.map((treatment, index) => (
                        <span key={index}>{treatment}</span>
                    ))}
                </div>
                <div className="mt-4 font-semibold">
                    ${price.toFixed(2)}
                </div>
                <Button
                    variant="outlined"
                    className="w-full  mt-4"
                    sx={{
                        color: "white",
                        backgroundColor: "black",
                        "&:hover": {
                            backgroundColor: "black",
                        },
                    }}
                    onClick={handleAddToCart}
                >
                    Add to Cart
                </Button>
            </div>
        </div>
    )
}

export default GemsCard;
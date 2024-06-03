'use client';
import Link from "next/link"
import { Button } from "@mui/material";
import Divider from "@mui/material/Divider";
import { JSX, MouseEvent, SVGProps} from "react"
import Image from "next/image";
import GemsCard from "@/components/gemsCard";
import {useAppSelector} from "@/redux/hooks";
import {Popconfirm} from "antd";
import axiosInstance from "@/utils/axiosInstance";
import {NOTIFICATION_TYPES, RESPONSE_STATUS} from "@/utils/enums";
import store from "@/redux/store";
import {showHide} from "@/redux/notification";
import {addToCart, removeFromCart} from "@/redux/cart";


const products = [
    {
        id: "1",
        name: "Amethyst Cluster",
        image: "/images/redGem.jpg",
        shape: "Cluster",
        color: "Purple",
        gemType: "Amethyst",
        treatments: ["Heat Treated"],
        price: 99.99,
    },
    {
        id: "2",
        name: "Citrine Pendant",
        image: "/images/redGem.jpg",
        shape: "Oval",
        color: "Yellow",
        gemType: "Citrine",
        treatments: ["None"],
        price: 49.99,
    },
    {
        id: "3",
        name: "Ruby Cabochon",
        image: "/placeholder.svg",
        shape: "Cabochon",
        color: "Red",
        gemType: "Ruby",
        treatments: ["Heat Treated"],
        price: 199.99,
    },
    {
        id: "4",
        name: "Emerald Cushion Cut",
        image: "/placeholder.svg",
        shape: "Cushion",
        color: "Green",
        gemType: "Emerald",
        treatments: ["Oiled"],
        price: 299.99,
    },
    {
        id: "5",
        name: "Smoky Quartz Freeform",
        image: "/placeholder.svg",
        shape: "Freeform",
        color: "Brown",
        gemType: "Quartz",
        treatments: ["None"],
        price: 79.99,
    },
    {
        id: "6",
        name: "Sapphire Round Brilliant",
        image: "/placeholder.svg",
        shape: "Round",
        color: "Blue",
        gemType: "Sapphire",
        treatments: ["Heat Treated"],
        price: 399.99,
    },
];

const Page = () => {
    const auth = useAppSelector(state => state.auth.auth)
    return (
        <section className="container mx-auto px-4 md:px-6 py-12 lg:py-16">
            {!auth.isAuthenticated ?
                <UnAuthorizedUserCart/> :
                <CartDetails/>
            }
        </section>
    )
}

const UnAuthorizedUserCart = () => {
    return (
        <div>
            <h1>Please Login Before Using Wish Lists</h1>
        </div>
    )
}

const CartDetails = () => {
    const wishList = useAppSelector(state => state.cart.cart);

    const handleDelete = (id:string)=>{
        axiosInstance.delete(`/wishList/${id}`)
            .then((response)=>{
                if (response.status === RESPONSE_STATUS.SUCCESS){
                    store.dispatch(removeFromCart(id))
                    store.dispatch(showHide({
                        type:NOTIFICATION_TYPES.SUCCESS,
                        message:'Item Removed from Wish List',
                        show:true
                    }))
                }
            })
    }
    return (
        <div className="grid md:grid-cols-[1fr_400px] gap-12">
            <div className="grid gap-8">
                <div className="grid gap-6">
                    <div className="flex items-center justify-between">
                        <h1 className="text-2xl font-bold">Your Cart</h1>
                        <Link className="text-sm font-medium text-primary hover:underline" href="#">
                            Clear Cart
                        </Link>
                    </div>
                    <div className="grid gap-6">
                        {
                            wishList.map(item => (
                                <div key={item._id} className="grid grid-cols-[80px_1fr_auto] items-center gap-4">
                                    <Image
                                        alt="Product Image"
                                        className="rounded-md object-cover"
                                        height={80}
                                        src={item.gemId.image}
                                        style={{
                                            aspectRatio: "80/80",
                                            objectFit: "cover",
                                        }}
                                        width={80}
                                    />
                                    <div className="grid gap-1">
                                        <h3 className="font-medium">{item.gemId.name}</h3>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">{item.gemId.description}</p>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <Button size={"large"}>Send an Offer</Button>
                                        <h4 className="font-medium">{item.isDefaultPrice ? <>{item.gemId.price}<span className={'text-green-600 text-[10px] ml-[10px]'}>(Original)</span></> : <>{item.price}<span className={'text-red-600 text-[10px] ml-[10px]'}>(Negotiated)</span></>}</h4>
                                        <Popconfirm
                                            title="Remove Item"
                                            description="Are you sure to delete this item?"
                                            okText="Yes"
                                            cancelText="No"
                                            onConfirm={(event)=>{handleDelete(item._id)}}
                                        >
                                            <Button className="w-8 h-8 hover:bg-gray-100 dark:hover:bg-gray-800">
                                                <XIcon className="w-4 h-4"/>
                                            </Button>
                                        </Popconfirm>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="grid gap-6">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-bold">You might also like</h2>
                        <Link className="text-sm font-medium text-primary hover:underline" href="#">
                            View all
                        </Link>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {products.map((product) => (
                            <GemsCard key={product.id} image={product.image} title={product.name} price={product.price}
                                      shape={product.shape} gemType={product.gemType} color={product.color}
                                      id={product.id} treatments={product.treatments}/>
                        ))}
                    </div>
                </div>
            </div>
            <div className="bg-gray-100 dark:bg-gray-950 rounded-lg p-6 sticky top-6">
                <div className="grid gap-6">
                    <div>
                        <h2 className="text-xl font-bold">Order Summary</h2>
                        <div className="grid gap-2 mt-4">
                            <div className="flex items-center justify-between">
                                <span className="text-gray-500 dark:text-gray-400">Subtotal</span>
                                <span className="font-medium">$72.97</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-gray-500 dark:text-gray-400">Shipping</span>
                                <span className="font-medium">$0.00</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-gray-500 dark:text-gray-400">Taxes</span>
                                <span className="font-medium">$5.84</span>
                            </div>
                            <Divider/>
                            <div className="flex items-center justify-between">
                                <span className="text-lg font-bold">Total</span>
                                <span className="text-lg font-bold">$78.81</span>
                            </div>
                        </div>
                    </div>
                    <Button className={"w-full"} sx={{backgroundColor: '#4169E1', color: 'white'}}>Proceed to
                        Checkout</Button>
                </div>
            </div>
        </div>
    )
}

function MinusIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M5 12h14"/>
        </svg>
    )
}


function PlusIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M5 12h14"/>
            <path d="M12 5v14"/>
        </svg>
    )
}


function XIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M18 6 6 18"/>
            <path d="m6 6 12 12"/>
        </svg>
    )
}

export default Page;
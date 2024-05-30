
import Link from "next/link"
import { Button } from "@mui/material";
import Divider from "@mui/material/Divider";
import { JSX, SVGProps } from "react"
import Image from "next/image";
import GemsCard from "@/components/gemsCard";

const Page = () => {
    return (
        <section className="container mx-auto px-4 md:px-6 py-12 lg:py-16">
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
                            <div className="grid grid-cols-[80px_1fr_auto] items-center gap-4">
                                <Image
                                    alt="Product Image"
                                    className="rounded-md object-cover"
                                    height={80}
                                    src="/images/blueGem.jpg"
                                    style={{
                                        aspectRatio: "80/80",
                                        objectFit: "cover",
                                    }}
                                    width={80}
                                />
                                <div className="grid gap-1">
                                    <h3 className="font-medium">Blue Gem</h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">A Blue gem with great finish</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center gap-2">
                                        <Button className="w-8 h-8 hover:bg-gray-100 dark:hover:bg-gray-800"
                                               >
                                            <MinusIcon className="w-4 h-4"/>
                                        </Button>
                                        <span className="text-base font-medium">2</span>
                                        <Button className="w-8 h-8 hover:bg-gray-100 dark:hover:bg-gray-800">
                                            <PlusIcon className="w-4 h-4"/>
                                        </Button>
                                    </div>
                                    <h4 className="font-medium">$59.98</h4>
                                    <Button className="w-8 h-8 hover:bg-gray-100 dark:hover:bg-gray-800" >
                                        <XIcon className="w-4 h-4"/>
                                    </Button>
                                </div>
                            </div>
                            <div className="grid grid-cols-[80px_1fr_auto] items-center gap-4">
                                <Image
                                    alt="Product Image"
                                    className="rounded-md object-cover"
                                    height={80}
                                    src="/images/redGem.jpg"
                                    style={{
                                        aspectRatio: "80/80",
                                        objectFit: "cover",
                                    }}
                                    width={80}
                                />
                                <div className="grid gap-1">
                                    <h3 className="font-medium">Red Gem</h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">A Red gem with great finish</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center gap-2">
                                        <Button className="w-8 h-8 hover:bg-gray-100 dark:hover:bg-gray-800" >
                                            <MinusIcon className="w-4 h-4"/>
                                        </Button>
                                        <span className="text-base font-medium">1</span>
                                        <Button className="w-8 h-8 hover:bg-gray-100 dark:hover:bg-gray-800" >
                                            <PlusIcon className="w-4 h-4"/>
                                        </Button>
                                    </div>
                                    <h4 className="font-medium">$12.99</h4>
                                    <Button className="w-8 h-8 hover:bg-gray-100 dark:hover:bg-gray-800" >
                                        <XIcon className="w-4 h-4"/>
                                    </Button>
                                </div>
                            </div>
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
                            <GemsCard image={'/images/blueGem.jpg'} title="Blue Gems" description="A Blue gem with great finish" price={20.00}/>
                            <GemsCard image={'/images/redGem.jpg'} title="Red Gems" description="A Red gem with great finish" price={20.00}/>
                            <GemsCard image={'/images/blueGem.jpg'} title="Blue Gems" description="A Blue gem with great finish" price={20.00}/>

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
                        <Button className={"w-full"} sx={{backgroundColor:'#4169E1', color:'white'}}>Proceed to Checkout</Button>
                    </div>
                </div>
            </div>
        </section>
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
            <path d="M5 12h14" />
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
            <path d="M5 12h14" />
            <path d="M12 5v14" />
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
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
        </svg>
    )
}

export default Page;
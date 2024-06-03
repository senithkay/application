'use client';
import {JSX, SVGProps, useEffect, useState} from "react"
import { Button} from "@mui/material";
import Image from "next/image"
import GemsCard from "@/components/gemsCard";
import { useSearchParams, useParams } from 'next/navigation';
import axiosInstance from "@/utils/axiosInstance";
import {RESPONSE_STATUS} from "@/utils/enums";



interface Gem {
    _id:string;
    description:string;
    about:string;
}
interface Product {
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

export default function Component() {

    const [gem, setGem] = useState<Gem>({
        _id:'',
        description:'',
        about:''
    });
    const [products, setProducts] = useState<Product[]>([]);
    const params = useParams();
    const id = params.id;
    const searchParams = useSearchParams();
    const type = searchParams.get('type');
    const name = searchParams.get('name');
    const color = searchParams.get('color');
    const shape = searchParams.get('shape');
    const treatments = JSON.parse(searchParams.get('treatments')??'[]');
    const price = searchParams.get('price')
    const image = searchParams.get('image')

    useEffect(() => {
        axiosInstance.get(`/gem/${shape}/${color}/${treatments}`)
            .then((response)=>{
                if (response.status === RESPONSE_STATUS.SUCCESS){
                    setProducts(response.data);
                }
            })
    }, []);
    useEffect(() => {
        axiosInstance.get(`/gem/${id}`)
            .then((response)=>{
                if (response.status === RESPONSE_STATUS.SUCCESS){
                    setGem(response.data);
                }
            })
    }, [id]);


    return (
        <div>
            <section className="bg-gray-100 dark:bg-gray-800 py-12 md:py-20">
                <div className="container px-4 md:px-6 grid md:grid-cols-2 gap-8 items-center">
                    <div>
                        <Image src={image??''} alt="Gem Image" width={600} height={600}
                             className="rounded-lg w-full"/>
                    </div>
                    <div className="space-y-4">
                        <h1 className="text-3xl md:text-4xl font-bold">{name}</h1>
                        <p className="text-gray-500 dark:text-gray-400 text-lg">
                            {gem.description}
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <h3 className="text-lg font-semibold">Color</h3>
                                <p>{color}</p>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold">Shape</h3>
                                <p>{shape}</p>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold">Treatments</h3>
                                {treatments.map((treatment:string)=> (
                                    <p key={treatment}>{treatment}</p>
                                ))}
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold">Gem Type</h3>
                                <p>{type}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="container px-4 md:px-6 py-12 md:py-20">
                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Product Details</h2>
                        <div className="space-y-4">
                            <div>
                                <h3 className="text-lg font-semibold">Price</h3>
                                <p className="text-3xl font-bold">{`$${price}`}</p>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold">Description</h3>
                                <p className="text-gray-500 dark:text-gray-400">
                                    {gem.about}
                                </p>
                            </div>
                            <div className="flex gap-4">
                                <Button size={"large"}>Add to Cart</Button>
                                <Button size={"large"}>Buy Now</Button>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <section className="bg-gray-100 dark:bg-gray-800 py-12 md:py-20">
                <div className="container px-4 md:px-6">
                    <h2 className="text-2xl font-bold mb-6">Related Gems</h2>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {products.map((product) => (
                            <GemsCard key={product._id} image={product.image} title={product.name}  price={product.price} shape={product.shape} gemType={product.gemType} color={product.color} id={product._id} treatments={product.treatments}/>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

function StarIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
    )
}
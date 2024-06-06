'use client';
import { JSX, SVGProps, useEffect, useState } from "react"
import { Button } from "@mui/material";
import Image from "next/image"
import GemsCard from "@/components/gemsCard";
import { useSearchParams, useParams } from 'next/navigation';
import axiosInstance from "@/utils/axiosInstance";
import { RESPONSE_STATUS } from "@/utils/enums";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"





interface Gem {
    _id: string;
    description: string;
    about: string;
}
interface Product {
    _id: string;
    name: string;
    description: string;
    color: string;
    image: string;
    price: number;
    treatments: Array<string>;
    shape: string;
    gemType: string;
}

export default function Component() {

    const [gem, setGem] = useState<Gem>({
        _id: '',
        description: '',
        about: ''
    });
    const [products, setProducts] = useState<Product[]>([]);
    const params = useParams();
    const id = params.id;
    const searchParams = useSearchParams();
    const type = searchParams.get('type');
    const name = searchParams.get('name');
    const color = searchParams.get('color');
    const shape = searchParams.get('shape');
    const treatments = JSON.parse(searchParams.get('treatments') ?? '[]');
    const price = searchParams.get('price')
    const image = searchParams.get('image')

    useEffect(() => {
        axiosInstance.get(`/gem/${shape}/${color}/${treatments}`)
            .then((response) => {
                if (response.status === RESPONSE_STATUS.SUCCESS) {
                    setProducts(response.data);
                }
            })
    }, []);
    useEffect(() => {
        axiosInstance.get(`/gem/${id}`)
            .then((response) => {
                if (response.status === RESPONSE_STATUS.SUCCESS) {
                    setGem(response.data);
                }
            })
    }, [id]);


    return (
        <div>



            <section>
                <div className="container mx-auto p-4">
                    <div className="flex flex-col md:flex-row items-center ">

                        <Carousel className="w-full md:w-1/2 flex justify-center " >
                            <CarouselContent>
                                <CarouselItem className="flex items-center justify-center">
                                    <div className="flex flex-col md:flex-row items-center">
                                        <Image src={image ?? ''} alt="Gem Image" width={600} height={600}
                                            className="rounded-lg w-60 h-60" />

                                    </div>
                                </CarouselItem>

                                <CarouselItem className="flex items-center justify-center">
                                    <div className="flex flex-col md:flex-row items-center">
                                        <Image src={image ?? ''} alt="Gem Image" width={600} height={600}
                                            className="rounded-lg w-60 h-60" />

                                    </div>
                                </CarouselItem>
                            </CarouselContent>
                            <CarouselPrevious className="absolute md:left-20 left-1 top-1/2 -translate-y-1/2 z-10">
                                <ChevronLeftIcon className="h-6 w-6" />
                            </CarouselPrevious>
                            <CarouselNext className="absolute md:right-20 right-1 top-1/2 -translate-y-1/2 z-10">
                                <ChevronRightIcon className="h-6 w-6" />
                            </CarouselNext>
                        </Carousel>
                        <div className="w-full md:w-1/2 mt-4 md:mt-0 md:ml-8 ">
                            <h1 className="md:text-2xl text-xl text-center font-semibold">{name} 2.19ct – 7x5mm Pair (SP0539)</h1>
                            <div className="mt-2 md:text-3xl text-xl text-center font-bold text-zinc-800 dark:text-zinc-200">US {`$${price}`}</div>

                            <div className="mt-4 text-zinc-700 dark:text-zinc-300">
                                <div >
                                    <h3 className="text-lg font-semibold">Color</h3>
                                    <p>{color}</p>
                                </div>
                                <div className="py-5">
                                    <h3 className="text-lg font-semibold">Shape</h3>
                                    <p>{shape}</p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold">Treatments</h3>
                                    {treatments.map((treatment: string) => (
                                        <p key={treatment}>{treatment}</p>
                                    ))}
                                </div>
                                <div className="pt-5">
                                    <h3 className="text-lg font-semibold">Gem Type</h3>
                                    <p>{type}</p>
                                </div>
                                <p className="mt-2 text-green-600 dark:text-green-400">In stock</p>
                            </div>
                            <div className="mt-4 text-center">
                                <p className="text-sm text-zinc-600 dark:text-zinc-400 py-2"> {gem.about}</p>
                                <h2 className="text-lg font-semibold">Add-on Certification</h2>
                                <p className="text-sm text-zinc-600 dark:text-zinc-400 py-2">{gem.description}<br></br>

                                    <a href="#" className="text-blue-500 "> View Sample Certificates</a></p>

                            </div>
                            <div className="mt-4 w-full ">
                                <button className="w-full bg-black  text-white py-2 rounded-md font-semibold">ADD TO CART</button>
                            </div>


                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="max-w-4xl mx-auto p-4">
                    <h2 className="text-center md:text-2xl text-xl font-semibold mb-4">GEM SPECIFICATIONS</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-4 md:text-md text-sm">
                        <div className="flex justify-between">
                            <span className="font-bold">SKU</span>
                            <span>SP0539</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-bold">CLARITY</span>
                            <span>VS - Slight Inclusions</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-bold">GEM TYPE</span>
                            <span>Natural Spinel</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-bold">SIZE (MM)</span>
                            <span>7.57 x 5.33 x 3.76</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-bold">PIECE(S)</span>
                            <span>2</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-bold">COLOR</span>
                            <span>Baby Blue</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-bold">WEIGHT (CT)</span>
                            <span>2.19</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-bold">ORIGIN</span>
                            <span>Africa</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-bold">SHAPE</span>
                            <span>Oval</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-bold">LAB</span>
                            <span>None</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-bold">TREATMENT</span>
                            <span>Not Determined</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-bold">CERT NO.</span>
                            <span>None</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 md:py-20 ">
                <div className="container px-4 md:px-6">
                    <h2 className="text-2xl font-bold mb-6 text-center">SIMILAR PRODUCTS</h2>
                    <div className="grid justify-center items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center ">
                        {products.map((product) => (
                            <GemsCard key={product._id} image={product.image} title={product.name} price={product.price} shape={product.shape} gemType={product.gemType} color={product.color} id={product._id} treatments={product.treatments} />
                        ))}

                    </div>
                </div>
            </section>
            <section>
                <div className=" flex items-center justify-center">
                    <Image src='/images/factory.avif' alt="Gem Image" width={600} height={600}
                        className="rounded-lg md:w-[50%] " />

                </div>
                <div className=" flex items-center justify-center">
                    <Image src='/images/sourcing.avif' alt="Gem Image" width={600} height={600}
                        className="rounded-lg md:w-[55%] " />

                </div>
            </section>
        </div>
    )
}
function ChevronLeftIcon(props: any) {
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
            <path d="m15 18-6-6 6-6" />
        </svg>
    )
}


function ChevronRightIcon(props: any) {
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
            <path d="m9 18 6-6-6-6" />
        </svg>
    )
}

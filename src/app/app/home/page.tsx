
import Link from "next/link"
import Image from "next/image";
import Button from "@mui/material/Button";
import GemsCard from "@/components/gemsCard";

const Page = ()=> {
    return (
        <>
            <section className="w-full py-12 md:py-24 lg:py-32">
                <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
                    <Image
                        alt="Hero Product"
                        className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full"
                        height={600}
                        src="/images/allGems.jpg"
                        width={600}
                    />
                    <div className="space-y-4">
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                            Discover the Best Gems for Your Need
                        </h1>
                        <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                            Explore our curated collection of high-quality home goods and furnishings to elevate your living space.
                        </p>
                        <div className="flex flex-col gap-2 min-[400px]:flex-row">
                            <Button variant="contained">
                                Shop Now
                            </Button>
                            <Button variant="outlined">
                                Learn More
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Gems</h2>
                            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                Discover our curated selection of the best Gems.
                            </p>
                        </div>
                    </div>
                    <div
                        className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:gap-12">
                        <GemsCard image={'/images/blueGem.jpg'} title="Blue Gems" description="A Blue gem with great finish" price={20.00}/>
                        <GemsCard image={'/images/redGem.jpg'} title="Red Gems" description="A Red gem with great finish" price={20.00}/>
                        <GemsCard image={'/images/blueGem.jpg'} title="Blue Gems" description="A Blue gem with great finish" price={20.00}/>
                    </div>
                </div>
            </section>
            <section className="w-full py-12 md:py-24 lg:py-32">
                <div className="container grid items-center justify-center gap-4 px-4 md:px-6 lg:gap-10">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                            Explore Our Full Gems Catalog
                        </h2>
                        <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                            Browse our wide selection of high-quality Gems to find the perfect
                            one for your
                            need.
                        </p>
                    </div>
                    <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
                        <Button  variant="contained">
                           View Catalog
                        </Button>
                        <Button variant="outlined">
                            Learn More
                        </Button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Page
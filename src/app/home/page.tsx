
import Link from "next/link"
import Image from "next/image";
import Button from "@mui/material/Button";
import GemsCard from "@/components/gemsCard";


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
                           
                           <Link href={"/shop"}>
                            <Button variant="contained" href="">
                                Shop Now
                            </Button>
                            </Link>
                           
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
                        {products.map((product) => (
                            <GemsCard key={product.id} image={product.image} title={product.name}  price={product.price} shape={product.shape} gemType={product.gemType} color={product.color} id={product.id} treatments={product.treatments}/>
                        ))}
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
                     
                    </div>
                </div>
            </section>
        </>
    )
}

export default Page
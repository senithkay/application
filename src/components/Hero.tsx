
import { Button } from "@mui/material"
import Link from "next/link"
import Image from "next/image"

export default function Hero() {
    return (
        <section className="w-full flex justify-center items-center py-5 md:py-5 lg:py-32 bg-[url('/images/project.jpg')] bg-cover bg-center">

            <div className="container px-4 md:px-6 flex flex-col items-center justify-center text-center space-y-6">
                <div className="max-w-3xl  space-y-4">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                        Loshan Gems
                    </h1>
                    <p className="text-lg text-gray-500 md:text-xl dark:text-gray-400">
                        Explore our exquisite collection of rare and precious gems, each one a unique masterpiece of nature's
                        artistry.
                    </p>
                </div>
                <Link
                    href="/shop"

                    prefetch={false}
                >
                    <Button variant="contained" sx={{
                        backgroundColor: 'black',
                        width: '200px',
                    }} >
                        Shop Now</Button>
                </Link>
            </div>
        </section>
    )
}
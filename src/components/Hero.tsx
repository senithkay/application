
import { Button } from "@mui/material"
import Link from "next/link"
import Image from "next/image"
import { Fullscreen } from "lucide-react"

export default function Hero() {
    return (
        <section className="w-full flex justify-center items-center py-5 md:py-5 lg:py-32  bg-cover bg-center relative">
            <div>
                <Image
                    src="/images/project.jpg"
                    alt="Gems"
                    layout="fill"
                    className=" object-cover "
                />
            </div>
            <div className="container px-4 md:px-6 flex flex-col items-center justify-center text-center space-y-6 relative">
                <div className="max-w-3xl  space-y-4">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                        Loshan Gems
                    </h1>
                    <p className="text-lg text-gray-500 md:text-xl dark:text-gray-400">
                        {'Explore our exquisite collection of rare and precious gems, each one a unique masterpiece of nature\'s\n' +
                            'artistry.'}
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
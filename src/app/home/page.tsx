
import Link from "next/link"
import Image from "next/image";
import Button from "@mui/material/Button";
import GemsCatalog from "@/components/gemsCatalog";
import SlideShow from "@/components/SlideShow";
import Hero from "@/components/Hero";


const Page = () => {
    return (
        <>
            <section className="w-full   ">
                <Hero />
            </section>

            <section className=" py-8 md:py-8 lg:py-8 flex items-center justify-center shadow-md w-full">


                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Gems</h2>
                            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                Discover our curated selection of the best Gems.
                            </p>
                        </div>
                    </div>
                    <div className="pt-5 ">
                        <SlideShow />

                    </div>

                </div>
            </section>
            <section className="w-full py-8 md:py-8 lg:py-8 flex items-center justify-center">
                <div className="container grid items-center justify-center gap-4 md:px-6 lg:gap-10">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                            Explore Our Full Gems Catalog
                        </h2>
                        <p className=" max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                            Browse our wide selection of high-quality Gems to find the perfect
                            one for your
                            need.
                        </p>
                    </div>


                    <div>
                        <GemsCatalog />
                    </div>

                </div>
            </section>

        </>
    )
}

export default Page
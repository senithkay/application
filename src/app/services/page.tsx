
import Link from "next/link"

export default function services() {
    return (
        <div className="flex flex-col min-h-[100dvh]">

            <main className="flex-1">
                <section className="w-full py-8 md:py-20 lg:py-20 bg-gray-100 dark:bg-gray-800">
                    <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
                        <div className="space-y-3">
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                HEAT TREATMENT OF GEMSTONES
                            </h1>
                            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                In the realm of gemstones, where every facet tells a story of natural wonder, Loshan Gems stands as a beacon of innovation and excellence.
                                Our commitment to preserving the intrinsic beauty of gemstones while enhancing their allure has led us to master the art of gem heat treatment.
                                In this article, we invite you to explore our distinctive approach to gem heat treatment, where precision meets passion to unveil the true brilliance
                                within each gemstone.

                            </p>
                            <Link
                                href="#"
                                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                                prefetch={false}
                            >
                                Contact US
                            </Link>
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6">
                        <div className="grid gap-10 sm:px-10 md:gap-16 md:grid-cols-2">
                            <div>
                                <img
                                    src="/placeholder.svg"
                                    width="550"
                                    height="310"
                                    alt="Custom Cutting"
                                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                                />
                                <div className="space-y-2 pt-4">
                                    <h2 className="text-2xl font-bold">Customized Treatment Protocols</h2>
                                    <p className="text-gray-500 dark:text-gray-400">
                                        We understand that each gemstone is unique, possessing its own distinct composition and characteristics.
                                        Therefore, we tailor our heat treatment protocols to suit the specific needs of each gemstone,
                                        taking into account factors such as mineral composition, color saturation, and clarity.
                                        This personalized approach ensures optimal results, maximizing the beauty and value of every gemstone entrusted to our care.

                                    </p>
                                </div>
                            </div>
                            <div>
                                <img
                                    src="/placeholder.svg"
                                    width="550"
                                    height="310"
                                    alt="Recutting"
                                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                                />
                                <div className="space-y-2 pt-4">
                                    <h2 className="text-2xl font-bold">Controlled Atmosphere Heating</h2>
                                    <p className="text-gray-500 dark:text-gray-400">
                                        One of the hallmarks of our gem heat treatment process is the use of controlled atmosphere heating environments.
                                        By carefully regulating the atmosphere surrounding the gemstones during heating,
                                        we minimize the risk of unwanted reactions and ensure uniform heat distribution.
                                        This precise control allows us to achieve consistent and predictable results,
                                        enhancing the color, clarity, and overall appearance of the gemstones.


                                    </p>
                                </div>
                            </div>
                            <div>
                                <img
                                    src="/placeholder.svg"
                                    width="550"
                                    height="310"
                                    alt="Polishing"
                                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                                />
                                <div className="space-y-2 pt-4">
                                    <h2 className="text-2xl font-bold">Ethical and Sustainable Practices</h2>
                                    <p className="text-gray-500 dark:text-gray-400">
                                        At Loshan Gems, ethical considerations are at the forefront of everything we do.
                                        We adhere to strict ethical and sustainability standards throughout our heat treatment process,
                                        ensuring that our practices are environmentally responsible and socially conscious.
                                        From sourcing ethically mined gemstones to employing energy-efficient heating technologies,
                                        we strive to minimize our environmental footprint and uphold the highest ethical standards in the industry.

                                    </p>
                                </div>
                            </div>
                            <div>
                                <img
                                    src="/placeholder.svg"
                                    width="550"
                                    height="310"
                                    alt="Polishing"
                                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                                />
                                <div className="space-y-2 pt-4">
                                    <h2 className="text-2xl font-bold">Conclusion</h2>
                                    <p className="text-gray-500 dark:text-gray-400">
                                        In the world of gemstones, where beauty is measured in brilliance and rarity, Loshan Gems stands as a beacon of excellence.
                                        Our distinctive approach to gem heat treatment combines precision, innovation, and ethical practices to unlock the true potential of every gemstone we touch.
                                        With our commitment to quality, integrity,
                                        and sustainability, we continue to set the standard for excellence in the gemstone industry, illuminating the brilliance of nature's most precious treasures.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full py-8 md:py-16 lg:py-16 bg-gray-100 dark:bg-gray-800">
                    <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
                        <div className="space-y-3">
                            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Contact Us</h2>
                            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                Fill out the form below to  heat treatment of gemstone .
                            </p>
                        </div>
                        <div className="mx-auto w-full max-w-sm space-y-2">
                            <form className="space-y-4">
                                <input type="text" placeholder="Gem Stone Name" className="w-full p-2 border rounded" />
                                <textarea placeholder="Requirement ( More details )" className="w-full p-2 border rounded"></textarea>
                                <input type="text" placeholder="Your Name" className="w-full p-2 border rounded" />
                                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                                    <input type="email" placeholder="Email" className="w-full p-2 border rounded" />
                                    <input type="tel" placeholder="Phone" className="w-full p-2 border rounded" />
                                </div>
                                <button type="submit" className="w-full bg-black text-white py-2 rounded">Submit</button>
                            </form>
                        </div>
                    </div>
                    
                </section>
            </main>

        </div>
    )
}


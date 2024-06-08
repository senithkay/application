
export default function about() {
    return (
        <div className="flex flex-col ">

            <section className="w-full pt-1">
                <div className="container  space-y-10 xl:space-y-16">
                    <div className="grid gap-4 md:grid-cols-2 md:gap-16">
                        <div>
                            <img
                                src="/placeholder.svg"
                                width="550"
                                height="550"
                                alt="Gem Store"
                                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
                            />
                        </div>
                        <div className="flex flex-col items-start space-y-4">
                            <div className="space-y-2">
                                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                                    Welcome to Loshan Gems
                                </h1>
                                <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                                    Gem Emporium is a family-owned business that has been providing the finest gemstones and jewelry for
                                    over 50 years. Our passion for quality and customer satisfaction is at the heart of everything we
                                    do.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full mt-8  py-8 md:py-8 lg:py-8 bg-gray-100 dark:bg-gray-800">
                <div className="container grid items-center justify-center gap-4 px-4 md:px-6 lg:gap-10">
                    <div className="space-y-3 text-center">
                        <div className="inline-block rounded-lg bg-gray-200 px-3 py-1 text-sm dark:bg-gray-700 dark:text-gray-300">
                            Our Values
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                            Integrity, Expertise, and Passion
                        </h2>
                        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                            At Gem Emporium, we are committed to upholding the highest standards of integrity, expertise, and
                            passion in everything we do. From sourcing the finest gemstones to providing exceptional customer
                            service, our values guide us in our mission to be the premier destination for gemstone enthusiasts.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <InfinityIcon className="w-12 h-12 text-primary" />
                            <h3 className="text-xl font-bold">Integrity</h3>
                            <p className="text-gray-500 dark:text-gray-400">
                                We are committed to honesty, transparency, and ethical practices in all our dealings, ensuring our
                                customers can trust the quality and authenticity of our products.
                            </p>
                        </div>
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <FocusIcon className="w-12 h-12 text-primary" />
                            <h3 className="text-xl font-bold">Expertise</h3>
                            <p className="text-gray-500 dark:text-gray-400">
                                Our team of gemologists and jewelry experts have decades of experience in the industry, ensuring our
                                customers receive the highest level of knowledge and guidance.
                            </p>
                        </div>
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <HeartIcon className="w-12 h-12 text-primary" />
                            <h3 className="text-xl font-bold">Passion</h3>
                            <p className="text-gray-500 dark:text-gray-400">
                                We are passionate about the beauty and wonder of gemstones, and we strive to share our enthusiasm with
                                our customers, helping them find the perfect pieces to suit their unique style and preferences.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full py-8 md:py-8 lg:py-10">
                <div className="container grid items-center justify-center gap-4 px-4 md:px-6 lg:gap-10">
                    <div className="space-y-3 text-center">
                        <div className="inline-block rounded-lg bg-gray-200 px-3 py-1 text-sm dark:bg-gray-700 dark:text-gray-300">
                            Our Team
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                            Passionate Experts Dedicated to Your Satisfaction
                        </h2>
                        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                            At Gem Emporium, our team of gemologists and jewelry experts are the heart and soul of our business.
                            With decades of experience in the industry, they are dedicated to providing our customers with the
                            highest level of knowledge, guidance, and personalized service.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <img
                                src="/placeholder.svg"
                                width="200"
                                height="200"
                                alt="Team Member 1"
                                className="rounded-full w-24 h-24 object-cover"
                            />
                            <h3 className="text-xl font-bold">Sarah Johnson</h3>
                            <p className="text-gray-500 dark:text-gray-400">Gemologist, 15 years of experience</p>
                            <p className="text-gray-500 dark:text-gray-400">
                                {' Sarah\'s passion for gemstones and her extensive knowledge of their unique properties and origins make\n' +
                                    ' her an invaluable asset to our team.'}
                            </p>
                        </div>
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <img
                                src="/placeholder.svg"
                                width="200"
                                height="200"
                                alt="Team Member 2"
                                className="rounded-full w-24 h-24 object-cover"
                            />
                            <h3 className="text-xl font-bold">Michael Chen</h3>
                            <p className="text-gray-500 dark:text-gray-400">Jewelry Designer, 10 years of experience</p>
                            <p className="text-gray-500 dark:text-gray-400">
                                {'Michael\'s creative vision and technical expertise allow him to craft stunning, one-of-a-kind jewelry\n' +
                                    '                                pieces that showcase the natural beauty of our gemstones.'}
                            </p>
                        </div>
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <img
                                src="/placeholder.svg"
                                width="200"
                                height="200"
                                alt="Team Member 3"
                                className="rounded-full w-24 h-24 object-cover"
                            />
                            <h3 className="text-xl font-bold">Lila Patel</h3>
                            <p className="text-gray-500 dark:text-gray-400">Customer Service Manager, 8 years of experience</p>
                            <p className="text-gray-500 dark:text-gray-400">
                                {'Lila\'s dedication to providing exceptional customer service and her deep understanding of our products\n' +
                                    '                                ensure that every customer who walks through our doors has a truly unforgettable experience.'}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full py-8 md:py-10 lg:py-10 bg-gray-100 dark:bg-gray-800">
                <div className="container grid items-center justify-center gap-4 px-4 md:px-6 lg:gap-10">
                    <div className="space-y-3 text-center">
                        <div className="inline-block rounded-lg bg-gray-200 px-3 py-1 text-sm dark:bg-gray-700 dark:text-gray-300">
                            Our Sourcing Process
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                            Ethically Sourced, Expertly Curated
                        </h2>
                        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                            At Gem Emporium, we take great pride in our meticulous sourcing process, ensuring that every gemstone we
                            offer is of the highest quality and ethically obtained. Our team of experts travels the world to
                            hand-select the finest gems, working directly with trusted suppliers and mines to guarantee the
                            integrity and sustainability of our supply chain.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <SearchCodeIcon className="w-12 h-12 text-primary" />
                            <h3 className="text-xl font-bold">Ethical Sourcing</h3>
                            <p className="text-gray-500 dark:text-gray-400">
                                We are committed to responsible and ethical sourcing practices, working only with suppliers and mines
                                that uphold the highest standards of labor and environmental protection.
                            </p>
                        </div>
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <CogIcon className="w-12 h-12 text-primary" />
                            <h3 className="text-xl font-bold">Expert Curation</h3>
                            <p className="text-gray-500 dark:text-gray-400">
                                Our team of gemologists carefully inspects and selects each gemstone, ensuring that only the most
                                exceptional and flawless specimens make it into our collection.
                            </p>
                        </div>
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <DiamondPlusIcon className="w-12 h-12 text-primary" />
                            <h3 className="text-xl font-bold">Quality Assurance</h3>
                            <p className="text-gray-500 dark:text-gray-400">
                                Every gemstone we sell is accompanied by a certificate of authenticity, guaranteeing its origin,
                                quality, and value, so you can shop with complete confidence.
                            </p>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    )
}

function CogIcon(props: any) {
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
            <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
            <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
            <path d="M12 2v2" />
            <path d="M12 22v-2" />
            <path d="m17 20.66-1-1.73" />
            <path d="M11 10.27 7 3.34" />
            <path d="m20.66 17-1.73-1" />
            <path d="m3.34 7 1.73 1" />
            <path d="M14 12h8" />
            <path d="M2 12h2" />
            <path d="m20.66 7-1.73 1" />
            <path d="m3.34 17 1.73-1" />
            <path d="m17 3.34-1 1.73" />
            <path d="m11 13.73-4 6.93" />
        </svg>
    )
}


function DiamondPlusIcon(props: any) {
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
            <path d="M12 8v8" />
            <path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0z" />
            <path d="M8 12h8" />
        </svg>
    )
}


function FocusIcon(props: any) {
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
            <circle cx="12" cy="12" r="3" />
            <path d="M3 7V5a2 2 0 0 1 2-2h2" />
            <path d="M17 3h2a2 2 0 0 1 2 2v2" />
            <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
            <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
        </svg>
    )
}

function HeartIcon(props: any) {
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
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        </svg>
    )
}


function InfinityIcon(props: any) {
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
            <path d="M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 0 0 0-8c-2 0-4 1.33-6 4Z" />
        </svg>
    )
}


function SearchCodeIcon(props: any) {
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
            <path d="m13 13.5 2-2.5-2-2.5" />
            <path d="m21 21-4.3-4.3" />
            <path d="M9 8.5 7 11l2 2.5" />
            <circle cx="11" cy="11" r="8" />
        </svg>
    )
}
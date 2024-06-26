
import Link from "next/link"
import { IoLogoTiktok } from "react-icons/io5";

export default function Footer() {
    return (
        <footer className="bg-black w-full text-gray-400 py-12 md:py-16 lg:py-20">
            <div className="container mx-auto px-4 md:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                <div className="flex flex-col items-start gap-4">
                    <Link href="#" className="inline-flex items-center gap-2" prefetch={false}>
                        <DiamondIcon className="w-8 h-8 text-primary" />
                        <span className="text-2xl font-bold text-white">{`LOSHAN GEMS (PVT) LTD `}</span>
                    </Link>
                    <p className="text-sm leading-relaxed">
                        Discover the rarest and most exquisite gems from around the world. Our passion for gemstones is reflected in
                        every piece we offer.
                    </p>
                </div>
                <div className="grid gap-4">
                    <h4 className="text-lg font-semibold text-white">Quick Links</h4>
                    <nav className="grid gap-2">
                        <Link href="/about" className="hover:text-primary transition-colors" prefetch={false}>
                            About
                        </Link>
                        <Link href="/shop" className="hover:text-primary transition-colors" prefetch={false}>
                            Shop
                        </Link>
                        <Link href="/contact" className="hover:text-primary transition-colors" prefetch={false}>
                            Contact
                        </Link>
                        
                    </nav>
                </div>
                <div className="grid gap-4">
                    <h4 className="text-lg font-semibold text-white">Social</h4>
                    <div className="flex items-center gap-3">
                        <Link href="https://www.facebook.com/share/cEAxAWWeSEJwvJEp/?mibextid=LQQJ4d " className="hover:text-primary transition-colors" prefetch={false}>
                            <FacebookIcon className="w-5 h-5" />
                        </Link>
                        <Link href="https://www.tiktok.com/@loshangems?_t=8n1QpBGp20u&_r=1" className="hover:text-primary transition-colors" prefetch={false}>
                            <IoLogoTiktok className="w-5 h-5" />
                        </Link>
                        <Link href="https://www.instagram.com/loshangems?igsh=MWwwNm5xdGxpbDFpeQ%3D%3D&utm_source=qr" className="hover:text-primary transition-colors" prefetch={false}>
                            <InstagramIcon className="w-5 h-5" />
                        </Link>
                      
                    </div>
                </div>
                <div className="grid gap-4">
                    <h4 className="text-lg font-semibold text-white">Contact</h4>
                    <div className="grid gap-2 text-sm">
                        <div className="flex items-center gap-2">
                            <PhoneIcon className="w-5 h-5" />
                            <a href="#" className="hover:text-primary transition-colors">
                                +94 77 123 4567
                            </a>
                        </div>
                        <div className="flex items-center gap-2">
                            <InboxIcon className="w-5 h-5" />
                            <a href="#" className="hover:text-primary transition-colors">
                            loshangems@gmail.com
                            </a>
                        </div>
                        <div className="flex items-center gap-2">
                            <LocateIcon className="w-5 h-5" />
                            <span>73/5, B Welivita, Kaduwela. Sri Lanka</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-4 md:px-6 lg:px-8 mt-8 md:mt-12 lg:mt-16 flex flex-col md:flex-row items-center justify-between">
                <p className="text-sm">&copy; 2024 Gem Co. All rights reserved.</p>
                <div className="flex items-center gap-4 mt-4 md:mt-0">
                    <Link href="#" className="hover:text-primary transition-colors text-sm" prefetch={false}>
                        Terms of Service
                    </Link>
                    <Link href="#" className="hover:text-primary transition-colors text-sm" prefetch={false}>
                        Privacy Policy
                    </Link>
                </div>
            </div>
        </footer>
    )
}

function DiamondIcon(props: any) {
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
            <path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z" />
        </svg>
    )
}


function FacebookIcon(props: any) {
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
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
    )
}


function InboxIcon(props: any) {
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
            <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
            <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
        </svg>
    )
}


function InstagramIcon(props: any) {
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
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
    )
}


function LinkedinIcon(props: any) {
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
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect width="4" height="12" x="2" y="9" />
            <circle cx="4" cy="4" r="2" />
        </svg>
    )
}


function LocateIcon(props: any) {
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
            <line x1="2" x2="5" y1="12" y2="12" />
            <line x1="19" x2="22" y1="12" y2="12" />
            <line x1="12" x2="12" y1="2" y2="5" />
            <line x1="12" x2="12" y1="19" y2="22" />
            <circle cx="12" cy="12" r="7" />
        </svg>
    )
}


function PhoneIcon(props: any) {
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
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
    )
}


function TwitterIcon(props: any) {
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
            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
        </svg>
    )
}
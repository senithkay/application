
import { CarouselItem, CarouselContent, CarouselPrevious, CarouselNext, Carousel } from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { JSX, SVGProps } from "react"

export function Component() {
  return (
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto py-12 px-4 md:px-6">
        <div className="grid gap-4">
          <Carousel className="rounded-lg overflow-hidden">
            <CarouselContent>
              <CarouselItem>
                <img
                    alt="Product Image"
                    className="aspect-square object-cover"
                    height={600}
                    src="/placeholder.svg"
                    width={600}
                />
              </CarouselItem>
              <CarouselItem>
                <img
                    alt="Product Image"
                    className="aspect-square object-cover"
                    height={600}
                    src="/placeholder.svg"
                    width={600}
                />
              </CarouselItem>
              <CarouselItem>
                <img
                    alt="Product Image"
                    className="aspect-square object-cover"
                    height={600}
                    src="/placeholder.svg"
                    width={600}
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious/>
            <CarouselNext/>
          </Carousel>
        </div>
        <div className="grid gap-6">
          <div>
            <h1 className="text-3xl font-bold">Acme Wireless Headphones</h1>
            <p className="text-gray-500 dark:text-gray-400 mt-2">
              Experience the ultimate in audio quality and comfort with our state-of-the-art wireless headphones.
            </p>
          </div>
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold">$99.99</h2>
            <Button size="lg">Add to Cart</Button>
          </div>
          <div className="grid gap-4">
            <div>
              <h3 className="text-lg font-semibold">Key Features</h3>
              <ul className="mt-2 space-y-2 text-gray-500 dark:text-gray-400">
                <li>
                  <CheckIcon className="w-5 h-5 mr-2 inline-block text-gray-900 dark:text-gray-50"/>
                  Noise-cancelling technology
                </li>
                <li>
                  <CheckIcon className="w-5 h-5 mr-2 inline-block text-gray-900 dark:text-gray-50"/>
                  Up to 20 hours of battery life
                </li>
                <li>
                  <CheckIcon className="w-5 h-5 mr-2 inline-block text-gray-900 dark:text-gray-50"/>
                  Lightweight and comfortable design
                </li>
                <li>
                  <CheckIcon className="w-5 h-5 mr-2 inline-block text-gray-900 dark:text-gray-50"/>
                  Seamless Bluetooth connectivity
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-span-2 mt-8">
          <h3 className="text-lg font-semibold">Related Products</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
            <div
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
              <Link className="absolute inset-0 z-10" href="#">
                <span className="sr-only">View</span>
              </Link>
              <img
                  alt="Related Product"
                  className="aspect-square object-cover w-full group-hover:opacity-50 transition-opacity"
                  height={300}
                  src="/placeholder.svg"
                  width={300}
              />
              <div className="p-4">
                <h4 className="font-semibold">Acme Wireless Earbuds</h4>
                <p className="text-gray-500 dark:text-gray-400 mt-1">Premium audio experience in a compact design.</p>
                <p className="font-semibold mt-2">$79.99</p>
              </div>
            </div>
            <div
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
              <Link className="absolute inset-0 z-10" href="#">
                <span className="sr-only">View</span>
              </Link>
              <img
                  alt="Related Product"
                  className="aspect-square object-cover w-full group-hover:opacity-50 transition-opacity"
                  height={300}
                  src="/placeholder.svg"
                  width={300}
              />
              <div className="p-4">
                <h4 className="font-semibold">Acme Wireless Speakers</h4>
                <p className="text-gray-500 dark:text-gray-400 mt-1">Powerful sound in a sleek, portable design.</p>
                <p className="font-semibold mt-2">$149.99</p>
              </div>
            </div>
            <div
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
              <Link className="absolute inset-0 z-10" href="#">
                <span className="sr-only">View</span>
              </Link>
              <img
                  alt="Related Product"
                  className="aspect-square object-cover w-full group-hover:opacity-50 transition-opacity"
                  height={300}
                  src="/placeholder.svg"
                  width={300}
              />
              <div className="p-4">
                <h4 className="font-semibold">Acme Wireless Charger</h4>
                <p className="text-gray-500 dark:text-gray-400 mt-1">
                  Fast and efficient wireless charging for your devices.
                </p>
                <p className="font-semibold mt-2">$39.99</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

function CheckIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}

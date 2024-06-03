/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/z58EQ9AXS4t
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import { CarouselItem, CarouselContent, CarouselPrevious, CarouselNext, Carousel } from "@/components/ui/carousel"

export function carousel() {
  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <Carousel className="w-full" controls>
        <CarouselContent>
          <CarouselItem>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <img
                alt="Card 1 Image"
                className="rounded-lg object-cover w-full h-64 md:h-auto"
                height={400}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "600/400",
                  objectFit: "cover",
                }}
                width={600}
              />
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Card 1 Title</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Card 1 description goes here. This is a brief overview of the content or features of this card.
                </p>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <img
                alt="Card 2 Image"
                className="rounded-lg object-cover w-full h-64 md:h-auto"
                height={400}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "600/400",
                  objectFit: "cover",
                }}
                width={600}
              />
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Card 2 Title</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Card 2 description goes here. This is a brief overview of the content or features of this card.
                </p>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <img
                alt="Card 3 Image"
                className="rounded-lg object-cover w-full h-64 md:h-auto"
                height={400}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "600/400",
                  objectFit: "cover",
                }}
                width={600}
              />
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Card 3 Title</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Card 3 description goes here. This is a brief overview of the content or features of this card.
                </p>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
          <ChevronLeftIcon className="h-6 w-6" />
        </CarouselPrevious>
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10">
          <ChevronRightIcon className="h-6 w-6" />
        </CarouselNext>
      </Carousel>
    </div>
  )
}

function ChevronLeftIcon(props) {
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


function ChevronRightIcon(props) {
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

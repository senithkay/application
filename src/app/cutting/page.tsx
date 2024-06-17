import React from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <section className="bg-gray-100 dark:bg-gray-800 py-12 md:py-20 lg:py-24">
      <div className="container px-4 md:px-6 mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Gem Cutting Services</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              At our gems website, we offer a wide range of gem cutting services to help you create the perfect piece of
              jewelry. Our skilled artisans use the latest techniques and methods to bring out the natural beauty and
              brilliance of your gemstones.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Faceting</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {` Our faceting process involves carefully cutting and polishing the gemstone to create a precise,
                  symmetrical shape that maximizes the stone's brilliance and fire.`}
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Cabochon</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Cabochon cutting creates a smooth, domed surface that highlights the natural beauty and color of the
                  gemstone, perfect for opaque or translucent stones.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Carving</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Our skilled carvers can transform gemstones into intricate, one-of-a-kind sculptures, adding depth and
                  texture to your jewelry.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Engraving</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Engraving allows us to add personalized designs, patterns, or inscriptions to the surface of your
                  gemstones, creating a truly unique piece.
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            <img
              src="/placeholder.svg"
              alt="Gem Cutting Process"
              width={300}
              height={300}
              className="rounded-lg object-cover"
            />
            <img
              src="/placeholder.svg"
              alt="Finished Gem"
              width={300}
              height={300}
              className="rounded-lg object-cover"
            />
            <img
              src="/placeholder.svg"
              alt="Gem Cutting Tools"
              width={300}
              height={300}
              className="rounded-lg object-cover"
            />
            <img
              src="/placeholder.svg"
              alt="Gem Cutting Demonstration"
              width={300}
              height={300}
              className="rounded-lg object-cover"
            />
          </div>
        </div>
        <div className="mt-12 md:mt-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            {`  If you have any questions about our gem cutting services or would like to inquire about a custom cutting
            project, please don't hesitate to reach out. Our team of experts is here to help.`}
          </p>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <Input type="text" placeholder="Name" />
            <Input type="email" placeholder="Email" />
            <Input type="tel" placeholder="Phone" />
            <Textarea placeholder="Message" rows={4} />
            <Button type="submit" className="justify-self-start md:col-span-2">
              Submit
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
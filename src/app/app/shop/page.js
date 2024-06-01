
"use client"

import { useState, useMemo } from "react"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"
import Button from "@mui/material/Button";
import Divider from '@mui/material/Divider';


// import { Separator } from "@/components/ui/separator"
// import { Button } from "@/components/ui/button"

export default function Component() {
  const [filters, setFilters] = useState({
    shape: [],
    color: [],
    gemType: [],
    treatments: [],
  })
  const products = [
    {
      id: 1,
      name: "Amethyst Cluster",
      image: "/placeholder.svg",
      shape: "Cluster",
      color: "Purple",
      gemType: "Amethyst",
      treatments: ["Heat Treated"],
      price: 99.99,
    },
    {
      id: 2,
      name: "Citrine Pendant",
      image: "/placeholder.svg",
      shape: "Oval",
      color: "Yellow",
      gemType: "Citrine",
      treatments: ["None"],
      price: 49.99,
    },
    {
      id: 3,
      name: "Ruby Cabochon",
      image: "/placeholder.svg",
      shape: "Cabochon",
      color: "Red",
      gemType: "Ruby",
      treatments: ["Heat Treated"],
      price: 199.99,
    },
    {
      id: 4,
      name: "Emerald Cushion Cut",
      image: "/placeholder.svg",
      shape: "Cushion",
      color: "Green",
      gemType: "Emerald",
      treatments: ["Oiled"],
      price: 299.99,
    },
    {
      id: 5,
      name: "Smoky Quartz Freeform",
      image: "/placeholder.svg",
      shape: "Freeform",
      color: "Brown",
      gemType: "Quartz",
      treatments: ["None"],
      price: 79.99,
    },
    {
      id: 6,
      name: "Sapphire Round Brilliant",
      image: "/placeholder.svg",
      shape: "Round",
      color: "Blue",
      gemType: "Sapphire",
      treatments: ["Heat Treated"],
      price: 399.99,
    },
  ]
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      if (filters.shape.length > 0 && !filters.shape.includes(product.shape)) {
        return false
      }
      if (filters.color.length > 0 && !filters.color.includes(product.color)) {
        return false
      }
      if (filters.gemType.length > 0 && !filters.gemType.includes(product.gemType)) {
        return false
      }
      if (
        filters.treatments.length > 0 &&
        !filters.treatments.some((treatment) => product.treatments.includes(treatment))
      ) {
        return false
      }
      return true
    })
  }, [filters])
  const handleFilterChange = (type, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [type]: prevFilters[type].includes(value)
        ? prevFilters[type].filter((item) => item !== value)
        : [...prevFilters[type], value],
    }))
  }
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-[280px_1fr] gap-8 p-4 md:p-6">
      <div className="bg-white dark:bg-gray-950 rounded-lg shadow-sm">
        <div className="p-4 border-b dark:border-gray-800">
          <h2 className="text-lg font-semibold">Filters</h2>
        </div>
        <div className="p-4 space-y-4">
          <Accordion type="single" collapsible>
            <AccordionItem value="shape">
              <AccordionTrigger className="text-base">Shape</AccordionTrigger>
              <AccordionContent>
                <div className="grid gap-2">
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox
                      checked={filters.shape.includes("Round")}
                      onCheckedChange={() => handleFilterChange("shape", "Round")}
                    />
                    Round
                  </Label>
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox
                      checked={filters.shape.includes("Oval")}
                      onCheckedChange={() => handleFilterChange("shape", "Oval")}
                    />
                    Oval
                  </Label>
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox
                      checked={filters.shape.includes("Cushion")}
                      onCheckedChange={() => handleFilterChange("shape", "Cushion")}
                    />
                    Cushion
                  </Label>
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox
                      checked={filters.shape.includes("Cabochon")}
                      onCheckedChange={() => handleFilterChange("shape", "Cabochon")}
                    />
                    Cabochon
                  </Label>
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox
                      checked={filters.shape.includes("Cluster")}
                      onCheckedChange={() => handleFilterChange("shape", "Cluster")}
                    />
                    Cluster
                  </Label>
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox
                      checked={filters.shape.includes("Freeform")}
                      onCheckedChange={() => handleFilterChange("shape", "Freeform")}
                    />
                    Freeform
                  </Label>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem value="color">
              <AccordionTrigger className="text-base">Color</AccordionTrigger>
              <AccordionContent>
                <div className="grid gap-2">
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox
                      checked={filters.color.includes("Red")}
                      onCheckedChange={() => handleFilterChange("color", "Red")}
                    />
                    Red
                  </Label>
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox
                      checked={filters.color.includes("Blue")}
                      onCheckedChange={() => handleFilterChange("color", "Blue")}
                    />
                    Blue
                  </Label>
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox
                      checked={filters.color.includes("Green")}
                      onCheckedChange={() => handleFilterChange("color", "Green")}
                    />
                    Green
                  </Label>
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox
                      checked={filters.color.includes("Yellow")}
                      onCheckedChange={() => handleFilterChange("color", "Yellow")}
                    />
                    Yellow
                  </Label>
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox
                      checked={filters.color.includes("Purple")}
                      onCheckedChange={() => handleFilterChange("color", "Purple")}
                    />
                    Purple
                  </Label>
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox
                      checked={filters.color.includes("Brown")}
                      onCheckedChange={() => handleFilterChange("color", "Brown")}
                    />
                    Brown
                  </Label>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem value="gemType">
              <AccordionTrigger className="text-base">Gem Type</AccordionTrigger>
              <AccordionContent>
                <div className="grid gap-2">
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox
                      checked={filters.gemType.includes("Amethyst")}
                      onCheckedChange={() => handleFilterChange("gemType", "Amethyst")}
                    />
                    Amethyst
                  </Label>
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox
                      checked={filters.gemType.includes("Citrine")}
                      onCheckedChange={() => handleFilterChange("gemType", "Citrine")}
                    />
                    Citrine
                  </Label>
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox
                      checked={filters.gemType.includes("Ruby")}
                      onCheckedChange={() => handleFilterChange("gemType", "Ruby")}
                    />
                    Ruby
                  </Label>
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox
                      checked={filters.gemType.includes("Emerald")}
                      onCheckedChange={() => handleFilterChange("gemType", "Emerald")}
                    />
                    Emerald
                  </Label>
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox
                      checked={filters.gemType.includes("Quartz")}
                      onCheckedChange={() => handleFilterChange("gemType", "Quartz")}
                    />
                    Quartz
                  </Label>
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox
                      checked={filters.gemType.includes("Sapphire")}
                      onCheckedChange={() => handleFilterChange("gemType", "Sapphire")}
                    />
                    Sapphire
                  </Label>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem value="treatments">
              <AccordionTrigger className="text-base">Treatments</AccordionTrigger>
              <AccordionContent>
                <div className="grid gap-2">
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox
                      checked={filters.treatments.includes("Heat Treated")}
                      onCheckedChange={() => handleFilterChange("treatments", "Heat Treated")}
                    />
                    Heat Treated
                  </Label>
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox
                      checked={filters.treatments.includes("Oiled")}
                      onCheckedChange={() => handleFilterChange("treatments", "Oiled")}
                    />
                    Oiled
                  </Label>
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox
                      checked={filters.treatments.includes("None")}
                      onCheckedChange={() => handleFilterChange("treatments", "None")}
                    />
                    None
                  </Label>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <div key={product.id} className="bg-white dark:bg-gray-950 rounded-lg shadow-sm overflow-hidden">
            <Link href="#" className="block" prefetch={false}>
              <img
                src="/placeholder.svg"
                alt={product.name}
                width={400}
                height={400}
                className="w-full h-56 object-cover"
              />
            </Link>
            <div className="p-4">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <span>{product.shape}</span>
                <Divider orientation="vertical" className="h-4" />
                <span>{product.color}</span>
                <Divider orientation="vertical" className="h-4" />
                <span>{product.gemType}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mt-2">
                {product.treatments.map((treatment, index) => (
                  <span key={index}>{treatment}</span>
                ))}
              </div>
              <div className="mt-4 font-semibold">${product.price.toFixed(2)}</div>
              <Button variant="outline" className="w-full  mt-4" 
              sx={{
               
                color: 'white',
                backgroundColor: 'black',
                '&:hover': {
                  backgroundColor: 'black',
                },
              
              }}>
                Add to Cart
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
"use client";

import { useState, useMemo, useEffect } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import GemsCard from "@/components/gemsCard";
import axiosInstance from "@/utils/axiosInstance";
import { RESPONSE_STATUS } from "@/utils/enums";
import Link from "next/link";
import PaginationRounded from "@/components/pagination";
import store from "@/redux/store";
import {showHideLoading} from "@/redux/loading";
import {Skeleton} from "@mui/material";
import {Empty} from "antd";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import * as React from "react";

interface Product {
  _id: string;
  name: string;
  description: string;
  color: string;
  image: string;
  price: number;
  treatments: Array<string>;
  shape: string;
  gemType: string;
}

export default function Component() {
  const [filters, setFilters] = useState<any>({
    shape: [],
    color: [],
    gemType: [],
    treatments: [],
  });

  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [numberOfPages, setNumberOfPages] = useState(1)
  const [page, setPage] = React.useState(1);

  useEffect(() => {
    store.dispatch(showHideLoading({
      show:true
    }))
    axiosInstance.get('/gem')
      .then((response) => {
        if (response.status === RESPONSE_STATUS.SUCCESS) {
          setProducts(response.data.gems);
          setIsLoading(false)
          setNumberOfPages(response.data.numberOfPages);
          store.dispatch(showHideLoading({
            show:false
          }))
        }
      })
  }, []);





  useEffect(() => {
    const payload = {...filters , page : page }
    store.dispatch(showHideLoading({
      show:true
    }))
    axiosInstance.post('/gem', payload)
        .then((response) => {
          if (response.status === RESPONSE_STATUS.SUCCESS) {
            setProducts(response.data);
            setIsLoading(false)
            store.dispatch(showHideLoading({
              show:false
            }))
          }
        })
  }, [filters]);

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const handleFilterChange = (type: string, value: string) => {
    setFilters((prevFilters: { [x: string]: any; }) => ({
      ...prevFilters,
      [type]: prevFilters[type].includes(value)
        ? prevFilters[type].filter((item: string) => item !== value)
        : [...prevFilters[type], value],
    }));
  };
  return (
    <div>
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
                      onCheckedChange={() =>
                        handleFilterChange("shape", "Round")
                      }
                    />
                    Round
                  </Label>
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox
                      checked={filters.shape.includes("Oval")}
                      onCheckedChange={() =>
                        handleFilterChange("shape", "Oval")
                      }
                    />
                    Oval
                  </Label>
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox
                      checked={filters.shape.includes("Cushion")}
                      onCheckedChange={() =>
                        handleFilterChange("shape", "Cushion")
                      }
                    />
                    Cushion
                  </Label>
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox
                      checked={filters.shape.includes("Cabochon")}
                      onCheckedChange={() =>
                        handleFilterChange("shape", "Cabochon")
                      }
                    />
                    Cabochon
                  </Label>
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox
                      checked={filters.shape.includes("Cluster")}
                      onCheckedChange={() =>
                        handleFilterChange("shape", "Cluster")
                      }
                    />
                    Cluster
                  </Label>
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox
                      checked={filters.shape.includes("Freeform")}
                      onCheckedChange={() =>
                        handleFilterChange("shape", "Freeform")
                      }
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
                      onCheckedChange={() =>
                        handleFilterChange("color", "Blue")
                      }
                    />
                    Blue
                  </Label>
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox
                      checked={filters.color.includes("Green")}
                      onCheckedChange={() =>
                        handleFilterChange("color", "Green")
                      }
                    />
                    Green
                  </Label>
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox
                      checked={filters.color.includes("Yellow")}
                      onCheckedChange={() =>
                        handleFilterChange("color", "Yellow")
                      }
                    />
                    Yellow
                  </Label>
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox
                      checked={filters.color.includes("Purple")}
                      onCheckedChange={() =>
                        handleFilterChange("color", "Purple")
                      }
                    />
                    Purple
                  </Label>
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox
                      checked={filters.color.includes("Brown")}
                      onCheckedChange={() =>
                        handleFilterChange("color", "Brown")
                      }
                    />
                    Brown
                  </Label>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem value="gemType">
              <AccordionTrigger className="text-base">
                Gem Type
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid gap-2">
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox
                      checked={filters.gemType.includes("Amethyst")}
                      onCheckedChange={() =>
                        handleFilterChange("gemType", "Amethyst")
                      }
                    />
                    Amethyst
                  </Label>
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox
                      checked={filters.gemType.includes("Citrine")}
                      onCheckedChange={() =>
                        handleFilterChange("gemType", "Citrine")
                      }
                    />
                    Citrine
                  </Label>
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox
                      checked={filters.gemType.includes("Ruby")}
                      onCheckedChange={() =>
                        handleFilterChange("gemType", "Ruby")
                      }
                    />
                    Ruby
                  </Label>
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox
                      checked={filters.gemType.includes("Emerald")}
                      onCheckedChange={() =>
                        handleFilterChange("gemType", "Emerald")
                      }
                    />
                    Emerald
                  </Label>
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox
                      checked={filters.gemType.includes("Quartz")}
                      onCheckedChange={() =>
                        handleFilterChange("gemType", "Quartz")
                      }
                    />
                    Quartz
                  </Label>
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox
                      checked={filters.gemType.includes("Sapphire")}
                      onCheckedChange={() =>
                        handleFilterChange("gemType", "Sapphire")
                      }
                    />
                    Sapphire
                  </Label>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem value="treatments">
              <AccordionTrigger className="text-base">
                Treatments
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid gap-2">
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox
                      checked={filters.treatments.includes("Heat Treated")}
                      onCheckedChange={() =>
                        handleFilterChange("treatments", "Heat Treated")
                      }
                    />
                    Heat Treated
                  </Label>
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox
                      checked={filters.treatments.includes("Oiled")}
                      onCheckedChange={() =>
                        handleFilterChange("treatments", "Oiled")
                      }
                    />
                    Oiled
                  </Label>
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox
                      checked={filters.treatments.includes("None")}
                      onCheckedChange={() =>
                        handleFilterChange("treatments", "None")
                      }
                    />
                    None
                  </Label>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
        {isLoading ?  <>
          <Skeleton variant="rectangular" width={210} height={118} />
          <Skeleton variant="rectangular" width={210} height={118} />
          <Skeleton variant="rectangular" width={210} height={118} />
          <Skeleton variant="rectangular" width={210} height={118} />
          <Skeleton variant="rectangular" width={210} height={118} />
        </> : (products.length <= 0 ?
            <Empty
                image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
                imageStyle={{ height: 60 }}
                description={
                  <span>
                      No items to display. Try clearing filters
                  </span>
                }
            >
            </Empty> :
            <>
              {products.map((product: Product) => (
                  <GemsCard key={product._id} image={product.image} title={product.name} price={product.price}
                            shape={product.shape} gemType={product.gemType} color={product.color} id={product._id}
                            treatments={product.treatments}/>


              ))}</>)
        }


      </div>


    </div>
      <div className=" flex justify-center  items-center w-full pt-10  ">
        <Stack spacing={2}>
          <Pagination count={numberOfPages} onChange={handlePageChange}  shape="rounded" />

        </Stack>
        </div>
    </div>
  );
}

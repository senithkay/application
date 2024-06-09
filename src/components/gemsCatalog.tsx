
import Link from "next/link"
import Button from "@mui/material/Button";


export default function gemsCatalog() {
  const gems = [
    {
      id: 1,
      name: "Ruby",
      image: "/images/ruby.webp",
      type: "Corundum",
    },
 
    {
      id: 3,
      name: "Sapphire",
      image: "/images/supphire.webp",
      type: "Corundum",
    },
    {
      id: 4,
      name: "Amethyst",
      image: "/images/amethyst.avif",
      type: "Quartz",
    },
    {
      id: 5,
      name: "Diamond",
      image: "/images/diamond.webp",
      type: "Carbon",
    },
 


  ]
  return (
    <section className="container  md:px-2 py-1 md:py-4">
      <div className="grid gap-8 md:gap-12">

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-2 md:gap-8 items-center justify-center">
          {gems.map((gem) => (
            <div
              key={gem.id}
              className=" justify-center items-center relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2"
            >
              <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                <span className="sr-only">View {gem.name}</span>
              </Link>
              <img
                src={gem.image}
                alt={gem.name}
                width={300}
                height={300}
                className="object-cover w-44 md:h-44 h-44  group-hover:opacity-50 transition-opacity"
              />
              <div className="bg-white md:p-4 p-1 dark:bg-gray-950 ">
                <h3 className=" text-center font-bold md:text-xl text-md">{gem.name}</h3>

              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center pt-5 items-center">
        <Button variant="contained" sx={{
          backgroundColor: 'black',
          width: '200px',
        }} >
          View All Catalog
        </Button>

      </div>
    </section>
  )
}
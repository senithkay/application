import Link from "next/link";
import Image from "next/image";
import {Button} from "@mui/material";
import Divider from "@mui/material/Divider";

interface Props {
    image:string,
    title:string,
    shape:string,
    color:string,
    gemType: string,
    id:string,
    treatments:string[],
    price:number
}

const GemsCard = ({image, title, shape , color, gemType, id, treatments, price}: Props)=>{
    return (
        <div
            key={id}
            className="bg-white dark:bg-gray-950 rounded-lg shadow-sm overflow-hidden"
        >
            <Link href="#" className="block" prefetch={false}>
                <Image
                    alt="Product Image"
                    className="object-cover w-full h-60 group-hover:opacity-50 transition-opacity"
                    height={300}
                    src={image}
                    style={{
                        aspectRatio: "400/300",
                        objectFit: "cover",
                    }}
                    width={400}
                />
            </Link>
            <div className="p-4">
                <h3 className="text-lg font-semibold">{title}</h3>
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <span>{shape}</span>
                    <Divider orientation="vertical" className="h-4"/>
                    <span>{color}</span>
                    <Divider orientation="vertical" className="h-4"/>
                    <span>{gemType}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mt-2">
                    {treatments.map((treatment, index) => (
                        <span key={index}>{treatment}</span>
                    ))}
                </div>
                <div className="mt-4 font-semibold">
                    ${price.toFixed(2)}
                </div>
                <Button
                    variant="outlined"
                    className="w-full  mt-4"
                    sx={{
                        color: "white",
                        backgroundColor: "black",
                        "&:hover": {
                            backgroundColor: "black",
                        },
                    }}
                >
                    Add to Cart
                </Button>
            </div>
        </div>
    )
}

export default GemsCard;
import Link from "next/link";
import Image from "next/image";

interface Props {
    image:string,
    title:string,
    description:string,
    price:number
}

const GemsCard = ({image, title, description, price}: Props)=>{
    return (
        <div className="relative group overflow-hidden rounded-lg">
            <Link className="absolute inset-0 z-10" href="#">
                <span className="sr-only">View</span>
            </Link>
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
            <div className="p-4">
                <h3 className="font-medium">{title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{description}</p>
                <h4 className="font-medium">${price.toFixed(2)}</h4>
            </div>
        </div>
    )
}

export default GemsCard;
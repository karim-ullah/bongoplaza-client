import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiStar } from "react-icons/ci";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-slate-900 border border-slate-500 rounded-2xl">
      <Link href={`/shop/${product._id}`} className="cursor-pointer">
        <Image
          className="rounded-t-2xl aspect-square w-full object-cover"
          src={product.imageUrl}
          height={1200}
          width={1200}
          alt={product.title}
        ></Image>

        <div className="p-4">
          <h4 className="text-sm uppercase text-foreground/80 font-exo2 font-medium">
            Brand
          </h4>
          <h3 className="font-dmSans text-foreground text-lg line-clamp-1">
            {product.title}
          </h3>
          <p className="text-[#6B7A99] line-clamp-1 font-dmSans">
            {product.description}
          </p>

          <span className="flex items-center gap-0.5 text-green-500 mt-3">
            <CiStar />
            <CiStar />
            <CiStar />
            <CiStar />
          </span>
        </div>
      </Link>
      <div className="flex items-center justify-between mt-3 p-4">
        <div>
          <span className="font-dmSans font-bold text-xl text-foreground">
            ${product.price}
          </span>
        </div>
        <Button>Add to cart</Button>
      </div>
    </div>
  );
};

export default ProductCard;

import QuantityAction from "@/components/detailspage/QuantityAction";
import { getSingleProduct } from "@/lib/api/product";
import Link from "next/link";
import React from "react";
import { BiCheck, BiChevronRight, BiHeart, BiMinus, BiPlus, BiShield } from "react-icons/bi";
import { CiStar } from "react-icons/ci";
import { FaTruck } from "react-icons/fa";
import { FiRefreshCw, FiShoppingCart } from "react-icons/fi";

interface DetailsPageProps {
  params: {
    id: string;
  };
}

const DetailsPage = async({params} : DetailsPageProps) => {
    const {id} = await params
    const response = await getSingleProduct(id)
    const product = response

    
  return (
    <div className="container py-10">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-muted-foreground mb-8">
        <Link href="/" className="hover:text-foreground transition-colors">
          Home
        </Link>
        <BiChevronRight className="w-3 h-3" />
        <Link href="/shop" className="hover:text-foreground transition-colors">
          Shop
        </Link>
        <BiChevronRight className="w-3 h-3" />
        <Link
          href={`/shop?q=${product.category}`}
          className="hover:text-foreground transition-colors"
        >
          {product.category}
        </Link>
        <BiChevronRight className="w-3 h-3" />
        <span className="text-foreground">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        {/* ── Images ── */}
        <div className="space-y-4">
          <div className="relative aspect-square rounded-2xl overflow-hidden bg-card border border-border">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            
            {/* {!product.inStock && (
              <div className="absolute inset-0 bg-background/70 flex items-center justify-center">
                <span className="px-4 py-2 bg-card border border-border rounded-xl text-sm font-semibold text-muted-foreground">
                  Out of Stock
                </span>
              </div>
            )} */}
          </div>

          {/* {product.images.length > 1 && (
            <div className="flex gap-3">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${
                    activeImage === i
                      ? "border-primary"
                      : "border-border hover:border-primary/40"
                  }`}
                >
                  <img
                    src={img}
                    alt={`${product.name} view ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )} */}
        </div>

        {/* ── Info ── */}
        <div className="space-y-6">
          <div>
            <div className="text-xs text-primary font-mono uppercase tracking-widest mb-2">
              {product.category}
            </div>
            <h1 className="text-3xl sm:text-4xl font-display font-bold tracking-tight text-foreground">
              {product.title}
            </h1>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <CiStar
                  key={i}
                  className={`w-4 h-4 ${i < Math.floor(product.rating) ? "fill-primary text-primary" : "fill-muted text-muted"}`}
                />
              ))}
            </div>
            <span className="text-sm font-semibold text-foreground">
              {product.rating}
            </span>
            <span className="text-sm text-muted-foreground">
              {/* ({product.reviews.toLocaleString()} reviews) */}
            </span>
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-3">
            <span className="text-4xl font-display font-extrabold text-foreground">
              ${product.price}
            </span>

           
          </div>

          <p className="text-muted-foreground leading-relaxed">
            {product.description}
          </p>

          {/* Stock status */}
          {/* <div
            className={`flex items-center gap-2 text-sm font-semibold ${product.inStock ? "text-emerald-400" : "text-rose-400"}`}
          >
            <span
              className={`w-2 h-2 rounded-full ${product.inStock ? "bg-emerald-400" : "bg-rose-400"}`}
            />
            {product.inStock
              ? "In Stock — Ships within 24 hours"
              : "Out of Stock"}
          </div> */}

          {/* Quantity + actions */}
          <QuantityAction product={product}/>

          {/* Perks */}
          <div className="grid grid-cols-3 gap-3 pt-2">
            {[
              { icon: FaTruck, label: "Free Shipping", sub: "Over $99" },
              { icon: BiShield, label: "2yr Warranty", sub: "All products" },
              { icon: FiRefreshCw, label: "60-Day Return", sub: "No questions" },
            ].map(({ icon: Icon, label, sub }) => (
              <div
                key={label}
                className="bg-card border border-border rounded-xl p-3 text-center"
              >
                <Icon className="w-4 h-4 text-primary mx-auto mb-1" />
                <div className="text-xs font-semibold text-foreground">
                  {label}
                </div>
                <div className="text-[10px] text-muted-foreground">{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;

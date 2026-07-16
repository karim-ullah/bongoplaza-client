import { getProducts } from '@/lib/api/product';
import Link from 'next/link';
import React from 'react';
import { BiChevronRight } from 'react-icons/bi';
import ProductCard from '../shop/ProductCard';
import { Product } from '@/app/shop/page';

const FeaturedProduct = async() => {
    const res = await getProducts()
    const products: Product[] = res.products
    return (
         <section className="py-20">
        <div className="container">
          <div className="flex items-end justify-between mb-10">
            <div>
              <div className="text-xs text-primary font-mono uppercase tracking-widest mb-2">Our Collection</div>
              <h2 className="text-4xl font-display font-bold tracking-tight text-foreground">Featured Gadgets</h2>
            </div>
            <Link href="/shop" className="hidden md:flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors group">
              View all <BiChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {products && (
                products.slice(0,8).map(product => <ProductCard key={product._id} product={product}/>)
            )}
          </div>

          <div className="flex md:hidden justify-center mt-8">
            <Link href="/shop" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
              View all products <BiChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    );
};

export default FeaturedProduct;
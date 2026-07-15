'use client'
import { Button } from '@heroui/react';
import React, { useState } from 'react';
import { BiCheck, BiHeart, BiMinus, BiPlus } from 'react-icons/bi';
import { FiShoppingCart } from 'react-icons/fi';

const QuantityAction = ({product}) => {
    const [qty, setQty] = useState<number>(0)
    const [added, setAdded] = useState(false)
    const [inWishlist, setInWishList] = useState(false)
    const addToCart = ()=>{
        
    }
    const buyNow = ()=>{

    }
    return (
        <div className="space-y-3">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1 bg-card border border-border rounded-xl overflow-hidden">
                <button
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-accent transition-all"
                >
                  <BiMinus className="w-4 h-4" />
                </button>
                <span className="w-10 text-center font-mono font-semibold text-foreground">
                  {qty}
                </span>
                <button
                  onClick={() => setQty((q) => Number(q) + 1)}
                  className="w-10 h-10 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-accent transition-all"
                >
                  <BiPlus className="w-4 h-4" />
                </button>
              </div>
              <span className="text-sm text-muted-foreground">
                Total:{" "}
                <span className="font-mono font-semibold text-foreground">
                  ${(Number(product.price) * Number(qty)).toFixed(2)}
                </span>
              </span>
            </div>

            <div className="flex gap-3">
              {/* <button
                onClick={addToCart}
                disabled={!product.inStock}
                className={`flex-1 flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-sm transition-all active:scale-[0.98] ${
                  added
                    ? "bg-emerald-500 text-white"
                    : product.inStock
                      ? "bg-primary text-primary-foreground hover:opacity-90 shadow-xl shadow-primary/30"
                      : "bg-muted text-muted-foreground cursor-not-allowed"
                }`}
              >
                {added ? (
                  <>
                    <BiCheck className="w-4 h-4" /> Added to Cart!
                  </>
                ) : (
                  <>
                    <FiShoppingCart className="w-4 h-4" /> Add to Cart
                  </>
                )}
              </button>

              <button
                onClick={() =>
                  dispatch({ type: "TOGGLE_WISHLIST", id: product.id })
                }
                className={`w-14 flex items-center justify-center rounded-xl border transition-all ${
                  inWishlist
                    ? "bg-rose-500/10 border-rose-500/30 text-rose-400"
                    : "bg-card border-border text-muted-foreground hover:border-primary/30 hover:text-foreground"
                }`}
                aria-label="Toggle wishlist"
              >
                <BiHeart
                  className={`w-5 h-5 ${inWishlist ? "fill-rose-500 text-rose-500" : ""}`}
                />
              </button> */}
            </div>

            {product &&(
              <Button
                onClick={buyNow}
                className="w-full py-4 rounded-xl font-bold text-sm border border-border hover:bg-accent hover:border-primary/30 transition-all active:scale-[0.98]"
              >
                Buy Now
              </Button>
            )}
          </div> 
    );
};

export default QuantityAction;
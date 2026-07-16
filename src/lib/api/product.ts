'use server'
import { serverFetch } from "../core/server/server"

export const getSellerProduct = async(sellerId: any)=>{
    return serverFetch(`/api/products/${sellerId}`)
}

// export const getProducts = async(params: string = "")=>{
//     return serverFetch(`/api/products?${params}`)
// }

export const getProducts = async (params?: URLSearchParams) => {
  const query = params?.toString();

  return serverFetch(`/api/products${query ? `?${query}` : ""}`);
};

export const getSingleProduct = async(productId : any)=>{
    return serverFetch(`/api/products/product/${productId}`)
}
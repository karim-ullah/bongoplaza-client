'use server'
import { serverFetch } from "../core/server/server"

export const getSellerProduct = async()=>{
    return serverFetch(`/api/`)
}

export const getProducts = async(params)=>{
    return serverFetch(`/api/products?${params}`)
}

export const getSingleProduct = async(productId)=>{
    return serverFetch(`/api/products/product/${productId}`)
}
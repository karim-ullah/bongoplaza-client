'use server'
import { serverFetch } from "../core/server/server"

export const getSellerProduct = async(sellerId)=>{
    return serverFetch(`/api/products/${sellerId}`)
}

export const getProducts = async(params)=>{
    return serverFetch(`/api/products?${params}`)
}

export const getSingleProduct = async(productId)=>{
    return serverFetch(`/api/products/product/${productId}`)
}
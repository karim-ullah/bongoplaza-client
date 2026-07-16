'use server'

import { serverMutation } from "../server/server"


export const addProduct = async(product: {sellerId: string, sellerName: string, title: string, imageUrl: string, category: string, description: string, price: string})=>{
  return serverMutation('/api/products', "POST", product)
}

export const deleteProduct = async(productId)=>{
  return serverMutation(`/api/products/${productId}`, 'DELETE')
}
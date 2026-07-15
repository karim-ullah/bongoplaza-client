"use client";
import React from "react";
import {
  Button,
  Description,
  FieldError,
  FieldGroup,
  Fieldset,
  Form,
  Input,
  Label,
  TextArea,
  TextField,
} from "@heroui/react";
import { uploadImage } from "@/lib/uploadImage";
import { addProduct } from "@/lib/core/actions/action";
import { authClient } from "@/lib/auth-client";

const AddProduct = () => {

  const {data:session} = authClient.useSession()
  const user = session?.user
  const sellerId = user?.id
    const sellerName = user?.name

  const onSubmit = async(e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault();
    
    
    const form = new FormData(e.currentTarget)
    const formData = Object.fromEntries(form.entries())

    const imageFile = formData.image
    const imageUrl = await uploadImage(imageFile)


    const {title,category, price, description} = formData

    const res = await addProduct({
        sellerId,
        sellerName,
        title,
        imageUrl,
        category,
        price,
        description
    })
    console.log(res);
  };
  return (
    <div className="py-10 px-4">
      <Form className="min-w-4xl" onSubmit={onSubmit}>
        <Fieldset>
          <Fieldset.Legend className="text-2xl">Add Product</Fieldset.Legend>
          <Description>Add your product information.</Description>
          <FieldGroup className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <TextField
              isRequired
              name="title"
              validate={(value) => {
                if (value.length < 3) {
                  return "Title must be at least 3 characters";
                }
                return null;
              }}
            >
              <Label>Title</Label>
              <Input placeholder="Product title" />
              <FieldError />
            </TextField>
            <TextField isRequired name="image">
                      <Label>Product Image</Label>
                      <input
                        id="image"
                        name="image"
                        type="file"
                        accept="image/*"
                        required
                        className="w-full rounded-lg border border-default-300 px-3 py-2"
                       
                      />
                      <FieldError />
                    </TextField>
            <TextField isRequired name="category">
              <Label>Category</Label>
              <Input placeholder="Your product category" />
              <FieldError />
            </TextField>
            <TextField isRequired name="price" type="number">
              <Label>Price</Label>
              <Input placeholder="Your product price" />
              <FieldError />
            </TextField>
            <TextField
            className={'row-span-2 w-full'}
              isRequired
              name="description"
             
            >
              <Label>Description</Label>
              <TextArea placeholder="Your product description..." />
              <Description>Minimum 10 characters</Description>
              <FieldError />
            </TextField>
          </FieldGroup>
          <Fieldset.Actions>
            <Button type="submit">Add Product</Button>
            
          </Fieldset.Actions>
        </Fieldset>
      </Form>
    </div>
  );
};

export default AddProduct;

"use client";
import React, { useEffect, useState } from "react";
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
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import AddedProduct from "@/components/dashboard/AddedProduct";
import { getSellerProduct } from "@/lib/api/product";
import { Product } from "@/app/shop/page";

const AddProduct = () => {
  const [open, setOpen] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);

  const router = useRouter();

  const { data: session } = authClient.useSession();
  const user = session?.user;
  const sellerId = user?.id;
  const sellerName = user?.name;

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const title = form.get('title') as string
    const category = form.get('category') as string
    const price = form.get('price') as string
    const description = form.get('description') as string
    const image = form.get('image')

    const imageUrl = await uploadImage(image);


    if (!sellerId || !sellerName) {
      throw new Error("User is not authenticated.");
    }

    const res = await addProduct({
      sellerId,
      sellerName,
      title,
      imageUrl,
      category,
      price,
      description,
    });
    if (res.insertedId) {
      toast.success("added successful");
      router.refresh();
      router.push("/dashboard/seller/add-product");
      setOpen(false);
    }
  };

  useEffect(() => {
    const getSellerProducts = async () => {
      const res = await getSellerProduct(sellerId);
      setProducts(res);
    };

    getSellerProducts();
  }, [sellerId, setProducts]);

  return (
    <div className="py-10 px-4">
      <Button onClick={() => setOpen(!open)}>Add Product</Button>

      {open && (
        <Form className="w-full md:min-w-4xl mt-6" onSubmit={onSubmit}>
          <Fieldset>
            <Fieldset.Legend className="text-2xl">Add Product</Fieldset.Legend>
            <Description>Add your product information.</Description>
            <FieldGroup>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <TextField
                  fullWidth
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
                  className={"row-span-2 w-full"}
                  isRequired
                  name="description"
                >
                  <Label>Description</Label>
                  <TextArea placeholder="Your product description..." />
                  <Description>Minimum 10 characters</Description>
                  <FieldError />
                </TextField>
              </div>
            </FieldGroup>
            <Fieldset.Actions>
              <Button type="submit">Add Product</Button>
            </Fieldset.Actions>
          </Fieldset>
        </Form>
      )}

      <div>
        <AddedProduct products={products} />
      </div>
    </div>
  );
};

export default AddProduct;

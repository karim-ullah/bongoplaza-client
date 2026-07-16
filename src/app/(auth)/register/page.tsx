"use client";
import { authClient } from "@/lib/auth-client";
import { uploadImage } from "@/lib/uploadImage";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { BiCheck } from "react-icons/bi";

const RegisterPage = () => {
  const router = useRouter();
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name") as string;
    const email = form.get("email") as string;
    const password = form.get("password") as string;
    const imageFile = form.get("image")

    const imageUrl = await uploadImage(imageFile);

    // console.log(imageUrl);

    const { data, error } = await authClient.signUp.email({
      name,
      email,
      image: imageUrl,
      password,
    });

    if (data) {
      router.push("/");
    }
    if (error) {
      alert(error.message);
    }
  };
  return (
    <div className="container flex items-center justify-center py-10">
      <Form
        className="flex w-96 flex-col gap-4 bg-[#141E30]/80 p-10 rounded-2xl"
        onSubmit={onSubmit}
      >
        <TextField
          isRequired
          name="name"
          validate={(value) => {
            if (value.length < 3) {
              return "Name must be at least 3 characters";
            }
            return null;
          }}
        >
          <Label>Name</Label>
          <Input placeholder="Enter your name" />
          <FieldError />
        </TextField>
        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }
            return null;
          }}
        >
          <Label>Email</Label>
          <Input placeholder="Enter your email" />
          <FieldError />
        </TextField>

        <TextField isRequired name="image">
          <Label>Profile Image</Label>
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

        <TextField
          isRequired
          minLength={8}
          name="password"
          type="password"
          validate={(value) => {
            if (value.length < 8) {
              return "Password must be at least 8 characters";
            }
            if (!/[A-Z]/.test(value)) {
              return "Password must contain at least one uppercase letter";
            }
            if (!/[0-9]/.test(value)) {
              return "Password must contain at least one number";
            }
            return null;
          }}
        >
          <Label>Password</Label>
          <Input placeholder="Enter your password" />
          <Description>
            Must be at least 8 characters with 1 uppercase and 1 number
          </Description>
          <FieldError />
        </TextField>
        <div>
          <Button fullWidth type="submit">
            <BiCheck />
            Sign Up
          </Button>
        </div>

        <div>
          <p className="text-sm text-center">
            Already have an account? please
            <Link className="text-blue-400" href={"login"}>
              Sign in now
            </Link>
          </p>
        </div>
      </Form>
    </div>
  );
};

export default RegisterPage;

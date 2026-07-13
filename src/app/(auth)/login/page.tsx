"use client";
import { authClient } from "@/lib/auth-client";
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
import { BsGoogle } from "react-icons/bs";

const LoginPage = () => {
    const router = useRouter()
  const onSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const formData = Object.fromEntries(form.entries());

    const {email,password} = formData
    const {data, error} = await authClient.signIn.email({
        email,
        password,
        callbackURL: '/'

    })

    if(data){
        alert('login success')
    }

    if(error){
        alert(error.message)
        console.log(error.message);
    }



  };
  return (
    <div className="min-h-[500px] container flex items-center justify-center">
      <Form
        className="flex w-96 flex-col gap-4 bg-[#141E30]/80 p-10 rounded-2xl"
        onSubmit={onSubmit}
      >
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
          <Input placeholder="john@example.com" />
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
            Sign In
          </Button>
        </div>
        <div>
          <Button className="w-full" variant="tertiary">
            <BsGoogle />
            Sign in with Google
          </Button>
        </div>
        <div>
          <p className="text-sm text-center">
            Don't have an account? please{" "}
            <Link className="text-blue-400" href={"register"}>
              Register Now
            </Link>
          </p>
        </div>
      </Form>
    </div>
  );
};

export default LoginPage;

/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import * as z from "zod";

const FormSchema = z.object({
  //input validation
  email: z.string().min(1, 'Email is required').email('Invalid Email'),
  password: z.string().min(1, 'Password is required').min(8, 'Password must have at least 8 characters'),
});

export default function SignInForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const onSubmit = (values:z.infer<typeof FormSchema>) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="mb-4">
              <FormLabel className="text-sm font-semibold">Email</FormLabel>
              <FormControl className="bg-background border border-gray-400  ">
                <Input placeholder="Enter your Email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="mb-2">
              <FormLabel className="text-sm font-semibold">Password</FormLabel>
              <FormControl className="bg-background border border-gray-400  ">
                <Input type="password" placeholder="Enter your Password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-full mt-1 font-semibold" type="submit">
          Sign in
        </Button>
      </form>
      <div className="mx-auto my-4 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400">
        or
      </div>
      <p className="text-center text-sm text-gray-600 mt-2">
        If you don&apos;t have an account, please&nbsp;.
        <Link className="text-blue-500 hover:underline" href="/sign-up">Sign up</Link>
      </p>
    </Form>
  );
}

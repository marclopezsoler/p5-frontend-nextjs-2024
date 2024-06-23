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
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  Name: z
    .string()
    .min(3, { message: "Product name must be at least 3 characters long." })
    .max(30),
  Price: z.number(),
  Description: z
    .string()
    .min(15, {
      message: "Product description must be at least 15 characters long.",
    })
    .max(150),
  Color: z.string(),
});

export default function NewProductPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      Name: "",
      Price: 0,
      Description: "",
      Color: "",
    },
  });

  const schemaShape = formSchema._def.shape();
  type FieldName = keyof typeof schemaShape;

  return (
    <main className="m-4 flex flex-1 items-center justify-center">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {Object.keys(schemaShape).map((fieldName) => {
            const typedFieldName = fieldName as FieldName;
            return (
              <FormField
                key={typedFieldName}
                control={form.control}
                name={typedFieldName}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{typedFieldName}</FormLabel>
                    <FormControl>
                      <Input placeholder={typedFieldName} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            );
          })}
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </main>
  );
}

function onSubmit(values: z.infer<typeof formSchema>) {
  console.log(values);
}

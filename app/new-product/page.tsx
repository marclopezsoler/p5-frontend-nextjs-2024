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
    .min(3, { message: "Product name must be at least 3 characters long" })
    .max(30),
  Price: z.number().min(1, { message: "Enter a valid number" }),
  Description: z
    .string()
    .min(15, {
      message: "Product description must be at least 15 characters long",
    })
    .max(150),
  Color: z.string().min(1, { message: "Enter a color" }),
});

const placeholders = {
  Name: "Enter product name...",
  Price: "Enter product price...",
  Description: "Enter product description...",
  Color: "Enter product color...",
};

export default function NewProductPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      Name: "",
      Price: undefined,
      Description: "",
      Color: "",
    },
  });

  const schemaShape = formSchema._def.shape();
  type FieldName = keyof typeof schemaShape;

  return (
    <main className="m-12 flex flex-1 flex-col items-center justify-center">
      <h1 className="font-bold text-xl">Create a new product</h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 shadow-md rounded-xl p-8 min-w-96 flex flex-col"
        >
          {Object.keys(schemaShape).map((fieldName) => {
            const typedFieldName = fieldName as FieldName;
            return (
              <FormField
                key={typedFieldName}
                control={form.control}
                name={typedFieldName}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold">
                      {typedFieldName}
                    </FormLabel>
                    <FormControl>
                      <Input
                        type={typedFieldName === "Price" ? "number" : "text"}
                        placeholder={placeholders[typedFieldName]}
                        {...field}
                        value={field.value ?? ""}
                        onChange={(e) =>
                          field.onChange(
                            typedFieldName === "Price"
                              ? e.target.valueAsNumber
                              : e.target.value
                          )
                        }
                        className="border-none placeholder-gray-500"
                        min={typedFieldName === "Price" ? 1 : undefined}
                      />
                    </FormControl>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />
            );
          })}
          <Button type="submit" size={"lg"} variant={"link"}>
            CREATE PRODUCT
          </Button>
        </form>
      </Form>
    </main>
  );
}

function onSubmit(values: z.infer<typeof formSchema>) {
  alert(values);
}

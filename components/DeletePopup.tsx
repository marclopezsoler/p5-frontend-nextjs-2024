"use client";

import { actiondeleteProduct } from "@/app/actions/products";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";

type ProductProps = {
  productId: number;
};

const formSchema = z.object({
  Delete: z
    .string()
    .min(6, { message: "Please type DELETE" })
    .max(6, { message: "Please type DELETE" }),
});

type FormSchemaType = z.infer<typeof formSchema>;

export function DialogCloseButton({ productId }: ProductProps) {
  const form = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
  });

  async function deleteProduct(data: FormSchemaType) {
    if (data.Delete === "DELETE") {
      await actiondeleteProduct(productId);
    } else {
      alert("Please type DELETE to confirm");
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="font-semibold text-white bg-black rounded-xl"
          variant={"outline"}
        >
          Delete
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md bg-white rounded-lg">
        <DialogHeader>
          <DialogTitle>Delete this product</DialogTitle>
          <DialogDescription>
            To delete this product please type "DELETE".
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(deleteProduct)}
            className="space-y-4"
          >
            <FormField
              control={form.control}
              name="Delete"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Type DELETE"
                      {...field}
                      value={field.value ?? ""}
                      onChange={(e) => field.onChange(e.target.value)}
                      className="border-none placeholder-gray-500"
                    />
                  </FormControl>
                  {form.formState.errors.Delete && (
                    <FormMessage className="text-red-500">
                      {form.formState.errors.Delete.message}
                    </FormMessage>
                  )}
                </FormItem>
              )}
            />
            <Button
              type="submit"
              size="lg"
              className="font-semibold text-white bg-black rounded-xl"
              variant={"outline"}
            >
              Delete
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

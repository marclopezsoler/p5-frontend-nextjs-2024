"use client";

import { actiondeleteProduct } from "@/app/actions/products";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

type ProductProps = {
  productId: number;
};

export function DialogCloseButton({ productId }: ProductProps) {
  const [inputValue, setInputValue] = useState("");

  async function deleteProduct(productId: number) {
    if (inputValue === "DELETE") {
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
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              Link
            </Label>
            <Input
              id="delete"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </div>
          <Button
            type="button"
            size="lg"
            className="font-semibold text-white bg-black rounded-xl"
            variant={"outline"}
            onClick={() => deleteProduct(productId)}
          >
            Delete
          </Button>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button
              type="button"
              className="font-semibold text-white bg-black rounded-xl"
              variant={"outline"}
            >
              Cancel
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

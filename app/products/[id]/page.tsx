import NotFound from "@/app/not-found";
import { DialogCloseButton } from "@/components/DeletePopup";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Product, getSingleProduct } from "@/lib/products";

type PageProps = {
  params: {
    id: string;
  };
};

export default async function ProductDetails({ params }: PageProps) {
  const { id } = params;
  const productId = parseInt(id, 10);

  const product: Product | undefined = await getSingleProduct(productId);

  if (!product) {
    NotFound();
  }

  return (
    <div className="product-details">
      <Card className="p-4 m-4 card">
        <div className="flex bg-zinc-200 h-72 rounded-xl p-4 m-4 pb-2 mb-2"></div>
        <CardHeader>
          <div className="flex flex-row justify-between">
            <CardTitle className="font-bold text-lg">{product.Name}</CardTitle>
            <a className="font-bold text-lg">{product.Price}€</a>
          </div>
        </CardHeader>
        <CardDescription className="text-base px-6 flex flex-col">
          <a className="text-gray-600 font-normal">{product.Category}</a>
          <a className="text-gray-600 font-normal">{product.Seller}</a>
          <a className="font-medium">{product.Description}</a>
        </CardDescription>
        <CardContent className="flex flex-row align-middle mt-4">
          <DialogCloseButton productId={productId}/>
        </CardContent>
      </Card>
    </div>
  );
}

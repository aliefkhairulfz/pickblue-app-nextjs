import Button from "@/components/ui/button";
import CardSimple from "@/components/ui/card-simple";
import CardHorizontal from "@/components/ui/card-simple-horizontal";
import { H4, H5, P } from "@/components/ui/typography";
import productData from "@/public/product-data.json";
import { Minus, Plus, Trash2 } from "lucide-react";

function CartPage() {
  const items = productData.slice(0, 5);
  const subtotal = items.length * 29;

  return (
    <div className="mt-[64px] container mx-auto px-6 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10">
        {/* CART ITEMS */}
        <div className="flex flex-col gap-4">
          <H4>Your Cart</H4>

          {items.map((p, i) => (
            <CardHorizontal key={i}>
              <CardHorizontal.Image src={p.image} alt={p.productName} />

              <CardHorizontal.Content>
                <CardHorizontal.Title>
                  <H5>{p.productName}</H5>
                </CardHorizontal.Title>

                <CardHorizontal.Description>
                  <P>{p.productDescriptions}</P>
                </CardHorizontal.Description>

                <CardHorizontal.Footer>
                  <span className="font-semibold">$29</span>

                  <div className="flex items-center gap-2">
                    <Button
                      intent="outline"
                      className="aspect-square p-"
                      size="small"
                    >
                      <Minus size={15} />
                    </Button>
                    <p className="w-6 text-center">1</p>
                    <Button
                      intent="outline"
                      className="aspect-square p-"
                      size="small"
                    >
                      <Plus size={15} />
                    </Button>
                    <Button
                      intent="outline"
                      className="border-0 aspect-square"
                      size="small"
                    >
                      <Trash2 size={20} />
                    </Button>
                  </div>
                </CardHorizontal.Footer>
              </CardHorizontal.Content>
            </CardHorizontal>
          ))}
        </div>

        <CardSimple className="w-full h-fit sticky top-[80px]">
          <CardSimple.Header>
            <CardSimple.Title>
              <H5>Order Summary</H5>
            </CardSimple.Title>

            <CardSimple.Description>
              <P>Review your order before checkout</P>
            </CardSimple.Description>
          </CardSimple.Header>

          <CardSimple.Content>
            <div className="flex justify-between text-sm">
              <span>Subtotal</span>
              <span>${subtotal}</span>
            </div>

            <div className="flex justify-between text-sm">
              <span>Tax</span>
              <span>$0</span>
            </div>

            <div className="border-t border-border pt-3 flex justify-between font-semibold">
              <span>Total</span>
              <span>${subtotal}</span>
            </div>
          </CardSimple.Content>

          <CardSimple.Footer>
            <Button className="w-full">Checkout</Button>
          </CardSimple.Footer>
        </CardSimple>
      </div>
    </div>
  );
}

export default CartPage;

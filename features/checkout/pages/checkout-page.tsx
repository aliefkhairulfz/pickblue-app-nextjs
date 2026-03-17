import Button from "@/components/ui/button";
import CardSimple from "@/components/ui/card-simple";
import { H2, H4 } from "@/components/ui/typography";
import productData from "@/public/product-data.json";

function CheckoutPage() {
  const items = productData.slice(0, 5);
  const subtotal = items.length * 29000;

  return (
    <div className="container mx-auto mt-[64px] px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-4">
        {/* ORDER ITEMS */}
        <div className="flex flex-col gap-4">
          <H2>Checkout</H2>

          <CardSimple className="w-full p-2.5">
            <CardSimple.Header>
              <CardSimple.Title>
                <H4>Order Summary</H4>
              </CardSimple.Title>
            </CardSimple.Header>

            <CardSimple.Content className="flex flex-col gap-4">
              {/* ITEMS */}
              {items.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between text-sm"
                >
                  <span className="text-foreground/80">
                    {item.productName} × 1
                  </span>
                  <span className="text-foreground/60">$14.99</span>
                </div>
              ))}

              <div className="border-t border-border my-2" />
              <div className="flex items-center justify-between">
                <span className="font-semibold text-lg">Total</span>
                <span className="font-semibold text-lg text-primary">
                  $14.99
                </span>
              </div>
            </CardSimple.Content>
          </CardSimple>
        </div>

        {/* PAYMENT SUMMARY */}
        <CardSimple className="h-fit sticky top-[100px] p-2.5 mt-[50px]">
          <CardSimple.Header>
            <CardSimple.Title>
              <H4>Payment Summary</H4>
            </CardSimple.Title>
          </CardSimple.Header>

          <CardSimple.Content>
            <div className="flex justify-between text-sm">
              <span>Items</span>
              <span>{items.length}</span>
            </div>

            <div className="flex justify-between text-sm">
              <span>Subtotal</span>
              <span>Rp {subtotal.toLocaleString()}</span>
            </div>

            <div className="border-t border-border pt-3 flex justify-between font-semibold">
              <span>Total</span>
              <span>Rp {subtotal.toLocaleString()}</span>
            </div>
          </CardSimple.Content>

          <CardSimple.Footer>
            <form action="/api/midtrans" method="POST">
              <Button className="w-full">Pay with Midtrans</Button>
            </form>
          </CardSimple.Footer>
        </CardSimple>
      </div>
    </div>
  );
}

export default CheckoutPage;

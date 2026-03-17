"use client";

import ButtonNextlink from "@/components/ui/button-nextlink";
import CardSimple from "@/components/ui/card-simple";
import { H5, P } from "@/components/ui/typography";

type Checkoutable = { subTotal: number };

function Checkoutable({ subTotal }: Checkoutable) {
  return (
    <CardSimple className="w-full h-fit sticky top-[80px] mt-[50px]">
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
          <span>${subTotal}</span>
        </div>

        <div className="flex justify-between text-sm">
          <span>Tax</span>
          <span>$0</span>
        </div>

        <div className="border-t border-border pt-3 flex justify-between font-semibold">
          <span>Total</span>
          <span>${subTotal}</span>
        </div>
      </CardSimple.Content>

      <CardSimple.Footer>
        <ButtonNextlink href={"/checkout"} className="w-full">
          Checkout
        </ButtonNextlink>
      </CardSimple.Footer>
    </CardSimple>
  );
}

export default Checkoutable;

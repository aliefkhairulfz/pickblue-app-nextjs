"use client";

import Button from "@/components/ui/button";
import CardHorizontal from "@/components/ui/card-simple-horizontal";
import { H2, H5, P } from "@/components/ui/typography";
import { Minus, Plus, Trash2 } from "lucide-react";
import { Items } from "../pages/cart-page";

type CartSetable = { items: Items };

function CartSetable({ items }: CartSetable) {
  return (
    <div className="flex flex-col gap-4">
      <H2>Your Cart</H2>

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
  );
}

export default CartSetable;

"use client";

import ProductForm from "@/components/ui/product-form";
import DashboardTabs from "@/components/ui/tabs-simple";
import { useState } from "react";
import Payout from "./payout";
import ProductsTableEditable from "./products-table-editable";
import ProductsTableSales from "./products-table-sales";

export const ProductsTableEditableData = [
  {
    id: 1,
    name: "MacBook Pro",
    category: "Laptop",
    variants: [
      { id: 11, color: "Silver", price: 2999 },
      { id: 12, color: "Gray", price: 2799 },
    ],
  },
  {
    id: 2,
    name: "MacBook Air",
    category: "Laptop",
    variants: [{ id: 21, color: "White", price: 1999 }],
  },
];

export const productsTableSalesData = [
  {
    id: 1,
    name: "Ethereal Sunset",
    buyer: "user@example.com",
    amount: 24.99,
    date: "2026-03-10",
  },
  {
    id: 2,
    name: "Neon City Nights",
    buyer: "art@fan.com",
    amount: 19.99,
    date: "2026-03-12",
  },
  {
    id: 3,
    name: "Chromatic Waves",
    buyer: "collector@mail.com",
    amount: 29.99,
    date: "2026-03-13",
  },
];

function ProductsCreator() {
  const [active, setActive] = useState<string>("products");
  console.log({ active });

  return (
    <div className="flex flex-col space-y-2">
      <div>
        <DashboardTabs active={active} setActive={setActive} />
      </div>

      <div>
        {active === "products" && (
          <ProductsTableEditable data={ProductsTableEditableData} />
        )}
        {active === "upload" && <ProductForm />}
        {active === "sales" && (
          <ProductsTableSales data={productsTableSalesData} />
        )}
        {active === "payout" && <Payout />}
      </div>
    </div>
  );
}

export default ProductsCreator;

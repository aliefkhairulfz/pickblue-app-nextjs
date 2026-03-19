"use client";

import TableSimple from "@/components/ui/table-simple";
import React from "react";
import { cn } from "@/utils/cn";

type ProductsTableSalesProps = {
  data: {
    id: number;
    name: string;
    buyer: string;
    amount: number;
    date: string;
  }[];
};

function ProductsTableSales({ data }: ProductsTableSalesProps) {
  return (
    <TableSimple>
      <TableSimple.THead>
        <tr>
          <th className="px-6 py-3">Product</th>
          <th className="px-6 py-3">Buyer</th>
          <th className="px-6 py-3">Amount</th>
          <th className="px-6 py-3">Date</th>
        </tr>
      </TableSimple.THead>

      <TableSimple.TBody>
        {data.map((d) => (
          <tr
            key={d.id}
            className={cn(
              "border-border odd:bg-neutral-primary even:bg-neutral-secondary-soft border-b",
            )}
          >
            <td className="px-6 py-4">{d.name}</td>
            <td className="px-6 py-4 text-foreground/60">{d.buyer}</td>
            <td className="px-6 py-4 text-primary font-medium">
              ${d.amount.toFixed(2)}
            </td>
            <td className="px-6 py-4 text-foreground/60">{d.date}</td>
          </tr>
        ))}
      </TableSimple.TBody>
    </TableSimple>
  );
}

export default ProductsTableSales;

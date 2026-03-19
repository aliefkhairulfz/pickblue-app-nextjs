"use client";

import TableSimple from "@/components/ui/table-simple";
import { ArrowDown, ArrowRight } from "lucide-react";
import React, { useState } from "react";
import { cn } from "@/utils/cn";
import ButtonBadge from "@/components/ui/button-badge";
import { ProductsTableEditableData } from "./products-creator";

type ProductsTableEditableProps = {
  data: typeof ProductsTableEditableData;
};

function ProductsTableEditable({ data }: ProductsTableEditableProps) {
  const [ids, setIds] = useState<number[]>([]);

  return (
    <TableSimple>
      <TableSimple.THead>
        <tr>
          <th className="px-0 w-20" />
          <th scope="col" className="px-6 py-3">
            ID
          </th>
          <th scope="col" className="px-6 py-3">
            Name
          </th>
          <th scope="col" className="px-6 py-3">
            Category
          </th>
          <th scope="col" className="px-6 py-3">
            Action
          </th>
        </tr>
      </TableSimple.THead>
      <TableSimple.TBody>
        {data.map((d, i) => {
          {
            /** COL OUTSIDE  */
          }
          return (
            <React.Fragment key={d.id}>
              <tr
                className={cn(
                  "border-border odd:bg-neutral-primary even:bg-neutral-secondary-soft",
                  data.length - 1 === i
                    ? ids.includes(d.id)
                      ? "border-b"
                      : "border-0"
                    : "border-b",
                )}
              >
                <td className="px-2 py-4 text-right">
                  <ButtonBadge
                    onClick={() =>
                      setIds((old) => {
                        if (old.includes(d.id)) {
                          return old.filter((o) => o !== d.id);
                        }
                        return [...old, d.id];
                      })
                    }
                  >
                    {ids.includes(d.id) ? <ArrowDown /> : <ArrowRight />}
                  </ButtonBadge>
                </td>
                <td className="px-6 py-4">{d.id}</td>
                <td className="px-6 py-4">{d.name}</td>
                <td className="px-6 py-4">{d.category}</td>
                <td className="px-6 py-4">
                  <ButtonBadge className="px-5 border-0">-</ButtonBadge>
                </td>
              </tr>

              {/** COL INSIDE */}
              {ids.includes(d.id) && (
                <>
                  <tr className="odd:bg-neutral-primary even:bg-neutral-secondary-soft text-sm bg-neutral/10">
                    <td className="px-6 py-2" />
                    <td className="px-6 py-2">Variant ID</td>
                    <td className="px-6 py-2">Variant Color</td>
                    <td className="px-6 py-2">Variant Price</td>
                    <td className="px-6 py-2" />
                  </tr>

                  {/** COL INSIDE INFO */}
                  {d.variants.map((v) => {
                    return (
                      <tr
                        key={v.id}
                        className="odd:bg-neutral-primary even:bg-neutral-secondary-soft text-sm text-foreground/50 bg-neutral/5 border-t border-dashed border-border/50"
                      >
                        <td className="px-6 py-4" />
                        <td className="px-6 py-4">{v.id}</td>
                        <td className="px-6 py-4">{v.color}</td>
                        <td className="px-6 py-4">{v.price}</td>
                        <td className="px-6 py-4">
                          <ButtonBadge variant={"default"}>Edit</ButtonBadge>
                        </td>
                      </tr>
                    );
                  })}
                </>
              )}
            </React.Fragment>
          );
        })}
      </TableSimple.TBody>
    </TableSimple>
  );
}

export default ProductsTableEditable;

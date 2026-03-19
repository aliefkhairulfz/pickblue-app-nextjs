"use client";

import { cn } from "@/utils/cn";
import { ComponentPropsWithoutRef } from "react";

type TableSimpleProps = ComponentPropsWithoutRef<"table">;
function TableSimple({ children, ...props }: TableSimpleProps) {
  return (
    <div className="relative border border-border rounded-2xl w-full">
      <table
        className={cn(
          "w-full table-auto text-left rounded-2xl",
          props.className,
        )}
      >
        {children}
      </table>
    </div>
  );
}

type TableSimpleTHeadProps = ComponentPropsWithoutRef<"thead">;
function TableSimpleTHead({ children, ...props }: TableSimpleTHeadProps) {
  return (
    <thead
      {...props}
      className={cn("bg-neutral/20 border-b border-border", props.className)}
    >
      {children}
    </thead>
  );
}

type TableSimpleTBodyProps = ComponentPropsWithoutRef<"tbody">;
function TableSimpleTBody({ children, ...props }: TableSimpleTBodyProps) {
  return <tbody className={cn("", props.className)}>{children}</tbody>;
}

TableSimple.THead = TableSimpleTHead;
TableSimple.TBody = TableSimpleTBody;

export default TableSimple;

// function TableSimple() {
//   const [ids, setIds] = useState<number[]>([]);

//   return (
//     <div className="relative border border-border rounded-2xl">
//       <table className="w-full table-auto text-left rounded-2xl">
//         <thead className="bg-neutral/20 border-b border-border">
//           <tr>
//             <th className="px-0 w-20" />
//             <th scope="col" className="px-6 py-3">
//               ID
//             </th>
//             <th scope="col" className="px-6 py-3">
//               Name
//             </th>
//             <th scope="col" className="px-6 py-3">
//               Category
//             </th>
//             <th scope="col" className="px-6 py-3">
//               Action
//             </th>
//           </tr>
//         </thead>

//         <tbody className="">
// {data.map((d, i) => {
//   {
//     /** COL OUTSIDE  */
//   }
//   return (
//     <React.Fragment key={d.id}>
//       <tr
//         className={cn(
//           "border-border odd:bg-neutral-primary even:bg-neutral-secondary-soft",
//           data.length - 1 === i
//             ? ids.includes(d.id)
//               ? "border-b"
//               : "border-0"
//             : "border-b",
//         )}
//       >
//         <td className="px-2 py-4 text-right">
//           <ButtonBadge
//             onClick={() =>
//               setIds((old) => {
//                 if (old.includes(d.id)) {
//                   return old.filter((o) => o !== d.id);
//                 }
//                 return [...old, d.id];
//               })
//             }
//           >
//             {ids.includes(d.id) ? <ArrowDown /> : <ArrowRight />}
//           </ButtonBadge>
//         </td>
//         <td className="px-6 py-4">{d.id}</td>
//         <td className="px-6 py-4">{d.name}</td>
//         <td className="px-6 py-4">{d.category}</td>
//         <td className="px-6 py-4">
//           <ButtonBadge className="px-5 border-0">-</ButtonBadge>
//         </td>
//       </tr>

//       {/** COL INSIDE */}
//       {ids.includes(d.id) && (
//         <>
//           <tr className="odd:bg-neutral-primary even:bg-neutral-secondary-soft text-sm bg-neutral/10">
//             <td className="px-6 py-2" />
//             <td className="px-6 py-2">Variant ID</td>
//             <td className="px-6 py-2">Variant Color</td>
//             <td className="px-6 py-2">Variant Price</td>
//             <td className="px-6 py-2" />
//           </tr>

//           {/** COL INSIDE INFO */}
//           {d.variants.map((v) => {
//             return (
//               <tr
//                 key={v.id}
//                 className="odd:bg-neutral-primary even:bg-neutral-secondary-soft text-sm text-foreground/50 bg-neutral/5 border-t border-dashed border-border/50"
//               >
//                 <td className="px-6 py-4" />
//                 <td className="px-6 py-4">{v.id}</td>
//                 <td className="px-6 py-4">{v.color}</td>
//                 <td className="px-6 py-4">{v.price}</td>
//                 <td className="px-6 py-4">
//                   <ButtonBadge variant={"default"}>Edit</ButtonBadge>
//                 </td>
//               </tr>
//             );
//           })}
//         </>
//       )}
//     </React.Fragment>
//   );
// })}
//         </tbody>
//       </table>
//     </div>
//   );
// }

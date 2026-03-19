"use client";

import { useForm, useFieldArray } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { DollarSign, Package, Trash2 } from "lucide-react";
import CardSimple from "./card-simple";
import { H3 } from "./typography";
import Separator from "./separator";
import Label from "./label";
import InputWithIcon from "./input-with-icon";
import Textarea from "./textarea";
import Button from "./button";

/* ================= ZOD SCHEMA ================= */

const variantSchema = z.object({
  name: z.string().min(1, "Variant name is required"),
  color: z.string().min(1, "Color is required"),
  size: z.string().min(1, "Size is required"),
  price: z.number().min(1, "Price must be > 0"),
  stock: z.number().min(0, "Stock cannot be negative"),
  image: z.any().refine((files) => files?.length > 0, "Image is required"),
});

const formSchema = z.object({
  productName: z.string().min(1, "Product name is required"),
  description: z.string().min(1, "Description is required"),
  variants: z.array(variantSchema).min(1),
});

type FormValues = z.infer<typeof formSchema>;

export default function ProductForm() {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      productName: "",
      description: "",
      variants: [
        {
          name: "",
          color: "",
          size: "",
          price: 0,
          stock: 0,
          image: undefined,
        },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "variants",
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <CardSimple className="w-full md:w-xl">
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardSimple.Header className="space-y-1">
          <CardSimple.Title>
            <H3>Products</H3>
          </CardSimple.Title>
          <CardSimple.Description>
            Create a new product with variants
          </CardSimple.Description>
        </CardSimple.Header>

        <Separator />

        <CardSimple.Content className="flex flex-col space-y-6">
          {/* PRODUCT */}
          <div className="space-y-4">
            <CardSimple.Title className="text-sm text-muted-foreground">
              Product Information
            </CardSimple.Title>

            <div className="flex flex-col space-y-1">
              <Label>Product Name</Label>
              <InputWithIcon icon={<Package />} {...register("productName")} />
              {errors.productName && (
                <p className="text-sm text-destructive">
                  {errors.productName.message}
                </p>
              )}
            </div>

            <div className="flex flex-col space-y-1">
              <Label>Description</Label>
              <Textarea {...register("description")} />
              {errors.description && (
                <p className="text-sm text-destructive">
                  {errors.description.message}
                </p>
              )}
            </div>
          </div>

          {/* VARIANTS */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <CardSimple.Title className="text-sm text-muted-foreground">
                Variants
              </CardSimple.Title>

              <Button
                type="button"
                intent="outline"
                onClick={() =>
                  append({
                    name: "",
                    color: "",
                    size: "",
                    price: 0,
                    stock: 0,
                    image: undefined,
                  })
                }
              >
                + Add Variant
              </Button>
            </div>

            {fields.map((field, index) => (
              <div
                key={field.id}
                className="border border-border rounded-2xl p-4 space-y-4 relative bg-neutral/10"
              >
                {fields.length > 1 && (
                  <button
                    type="button"
                    onClick={() => remove(index)}
                    className="absolute top-3 right-3 text-muted-foreground hover:text-destructive"
                  >
                    <Trash2 size={16} />
                  </button>
                )}

                <div className="grid grid-cols-2 gap-4">
                  {/* NAME */}
                  <div className="flex flex-col space-y-2">
                    <Label>Variant Name</Label>
                    <InputWithIcon
                      icon={<Package />}
                      {...register(`variants.${index}.name`)}
                    />
                    {errors.variants?.[index]?.name && (
                      <p className="text-sm text-destructive">
                        {errors.variants[index]?.name?.message}
                      </p>
                    )}
                  </div>

                  {/* COLOR */}
                  <div className="flex flex-col space-y-2">
                    <Label>Color</Label>
                    <InputWithIcon
                      icon={<Package />}
                      {...register(`variants.${index}.color`)}
                    />
                    {errors.variants?.[index]?.color && (
                      <p className="text-sm text-destructive">
                        {errors.variants[index]?.color?.message}
                      </p>
                    )}
                  </div>

                  {/* SIZE */}
                  <div className="flex flex-col space-y-2">
                    <Label>Size</Label>
                    <InputWithIcon
                      icon={<Package />}
                      {...register(`variants.${index}.size`)}
                    />
                    {errors.variants?.[index]?.size && (
                      <p className="text-sm text-destructive">
                        {errors.variants[index]?.size?.message}
                      </p>
                    )}
                  </div>

                  {/* PRICE */}
                  <div className="flex flex-col space-y-2">
                    <Label>Price</Label>
                    <InputWithIcon
                      type="number"
                      icon={<DollarSign />}
                      {...register(`variants.${index}.price`, {
                        valueAsNumber: true,
                      })}
                    />
                    {errors.variants?.[index]?.price && (
                      <p className="text-sm text-destructive">
                        {errors.variants[index]?.price?.message}
                      </p>
                    )}
                  </div>

                  {/* STOCK */}
                  <div className="flex flex-col space-y-2">
                    <Label>Stock</Label>
                    <InputWithIcon
                      type="number"
                      icon={<Package />}
                      {...register(`variants.${index}.stock`, {
                        valueAsNumber: true,
                      })}
                    />
                    {errors.variants?.[index]?.stock && (
                      <p className="text-sm text-destructive">
                        {errors.variants[index]?.stock?.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* IMAGE */}
                <div className="flex flex-col space-y-2">
                  <Label>Variant Image</Label>
                  <label className="flex flex-col items-center justify-center border border-dashed border-border bg-background rounded-xl p-6 cursor-pointer hover:bg-muted/50">
                    <span className="text-sm text-muted-foreground">
                      Click to upload
                    </span>

                    <input
                      type="file"
                      className="hidden"
                      {...register(`variants.${index}.image`)}
                    />
                  </label>

                  {errors.variants?.[index]?.image && (
                    <p className="text-sm text-destructive">
                      {errors.variants[index]?.image?.message as string}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* ACTION */}
          <div className="flex justify-end gap-2">
            <Button type="button" intent="outline">
              Cancel
            </Button>
            <Button type="submit">Create Product</Button>
          </div>
        </CardSimple.Content>
      </form>
    </CardSimple>
  );
}

"use client";

import ButtonNextlink from "@/components/ui/button-nextlink";
import InputWithIcon from "@/components/ui/input-with-icon";
import { usePathname, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

export const filterableCategories = [
  "All",
  "Illustration",
  "Photography",
  "3D Art",
  "Pixel Art",
  "Concept Art",
  "Abstract",
];

type FilterableSearch = {
  query: string;
};

function FilterableSearch() {
  const pathname = usePathname();
  const router = useRouter();

  const { register, handleSubmit } = useForm<FilterableSearch>({
    defaultValues: {
      query: "",
    },
  });

  function onSubmit(data: FilterableSearch) {
    const { query } = data;
    router.push(`/search?query=${query}`);
  }

  return (
    <>
      {/** FILTERABLE FORM SEARCH INPUT */}
      <form onSubmit={handleSubmit(onSubmit)} className="w-full md:w-[400px]">
        <InputWithIcon
          {...register("query")}
          placeholder="Search artworks..."
        />
        <button className="hidden">submit</button>
      </form>

      {/** FILTERABLE BUTTON BADGE */}
      <div className="flex flex-wrap items-center gap-2">
        {filterableCategories.map((f, i) => {
          const category = f.split(" ").join("-").toLowerCase();
          console.log({ category });

          return (
            <ButtonNextlink
              intent={
                pathname.split("/").at(-1) === category ? "active" : "outline"
              }
              href={`/explore/${category}`}
              className="p-1 px-4 rounded-full text-sm"
              key={i}
            >
              {f}
            </ButtonNextlink>
          );
        })}
      </div>
    </>
  );
}

export default FilterableSearch;

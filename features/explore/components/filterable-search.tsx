"use client";

import ButtonBadge from "@/components/ui/button-badge";
import InputWithIcon from "@/components/ui/input-with-icon";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";

const filterableCategories = [
  "All",
  "Illustration",
  "Photography",
  "3D Art",
  "Pixel Art",
  "Concept Art",
  "Abstract",
  "1",
  "2",
  "3",
];

type FilterableSearch = {
  query: string;
};

function FilterableSearch() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const { register, handleSubmit } = useForm<FilterableSearch>({
    defaultValues: {
      query: "",
    },
  });

  function handleCreateQueryParams(key: string, value: string) {
    const params = new URLSearchParams(searchParams.toString());
    params.set(key, value);
    return params.toString();
  }

  function onSubmit(data: FilterableSearch) {
    const params = handleCreateQueryParams("query", data.query);
    router.push(pathname + "?" + params);
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
          const cat = f.split(" ").join("-").toLowerCase();

          return (
            <ButtonBadge
              className="p-1 px-4 rounded-full text-sm"
              variant={
                searchParams.get("category") === cat ? "active" : "default"
              }
              key={i}
              onClick={() => {
                const params = handleCreateQueryParams("category", cat);
                router.push(pathname + "?" + params);
              }}
            >
              {f}
            </ButtonBadge>
          );
        })}
      </div>
    </>
  );
}

export default FilterableSearch;

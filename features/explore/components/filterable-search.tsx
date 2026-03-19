"use client";

import ButtonNextlink from "@/components/ui/button-nextlink";
import InputWithIcon from "@/components/ui/input-with-icon";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

export const filterableCategories = [
  "all",
  "illustration",
  "photography",
  "3d-art",
  "pixel-art",
  "concept-art",
  "abstract",
];

type FilterableSearch = {
  query: string;
};

function FilterableSearch() {
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations("FilterableSearch");

  const { register, handleSubmit } = useForm<FilterableSearch>({
    defaultValues: {
      query: "",
    },
  });

  function onSubmit(data: FilterableSearch) {
    router.push(`/search?query=${data.query}`);
  }

  return (
    <>
      {/* SEARCH INPUT */}
      <form onSubmit={handleSubmit(onSubmit)} className="w-full md:w-[400px]">
        <InputWithIcon
          {...register("query")}
          placeholder={t("searchPlaceholder")}
        />
        <button className="hidden">submit</button>
      </form>

      {/* CATEGORY BUTTON */}
      <div className="flex flex-wrap items-center gap-2">
        {filterableCategories.map((category) => (
          <ButtonNextlink
            key={category}
            intent={
              pathname.split("/").at(-1) === category ? "active" : "outline"
            }
            href={`/explore/${category}`}
            className="p-1 px-4 rounded-full text-sm"
          >
            {t(`categories.${category}`)}
          </ButtonNextlink>
        ))}
      </div>
    </>
  );
}

export default FilterableSearch;

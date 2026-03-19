import Badge from "@/components/ui/badge";
import CardSimple from "@/components/ui/card-simple";
import NextImage from "@/components/ui/next-image";
import { H1, P, H5 } from "@/components/ui/typography";
import productData from "@/public/product-data.json";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import FilterableSearch from "@/features/explore/components/filterable-search";

type SearchPageProps = {
  searchParams: Promise<{ query?: string }>;
};

async function SearchPage({ searchParams }: SearchPageProps) {
  const { query = "" } = await searchParams;
  const t = await getTranslations("SearchPage");

  const filteredProducts = productData.filter((p) =>
    p.productName.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <section className="w-full flex flex-col gap-8 container mx-auto mt-28 px-6 md:px-0">
      {/* HEADER */}
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <H1>{t("searchResults")}</H1>
          <P className="text-foreground/50">
            {t("showingResultsFor")}{" "}
            <span className="font-semibold">&quot;{query}&quot;</span>
          </P>
        </div>

        {/* 🔥 INPUT + FILTER IKUT */}
        <div className="flex flex-col md:flex-row items-center gap-4">
          <FilterableSearch />
        </div>
      </div>

      {/* RESULT */}
      {filteredProducts.length === 0 ? (
        <P className="text-foreground/50">{t("noResults")}</P>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredProducts.map((p, i) => (
            <Link href={`/artwork/${p.id}`} key={i}>
              <CardSimple className="w-full">
                <div className="aspect-video" />
                <div className="absolute inset-0 aspect-video">
                  <NextImage
                    className="aspect-video group overflow-hidden"
                    src={p.image}
                    alt={p.productName}
                  />
                </div>

                <CardSimple.Header>
                  <CardSimple.Title className="w-[70%]">
                    <H5>{p.productName}</H5>
                  </CardSimple.Title>

                  <CardSimple.Description>
                    <P className="text-foreground/50">
                      {p.productDescriptions}
                    </P>
                  </CardSimple.Description>

                  <CardSimple.Action>
                    <Badge>{p.productCategory}</Badge>
                  </CardSimple.Action>
                </CardSimple.Header>

                <CardSimple.Footer>
                  <P>{p.productStore}</P>
                </CardSimple.Footer>
              </CardSimple>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}

export default SearchPage;

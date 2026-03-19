import Badge from "@/components/ui/badge";
import CardSimple from "@/components/ui/card-simple";
import NextImage from "@/components/ui/next-image";
import { H1, H5, P } from "@/components/ui/typography";
import productData from "@/public/product-data.json";
import Link from "next/link";
import FilterableSearch from "../components/filterable-search";
import { getTranslations } from "next-intl/server";

type ExplorePage = {
  params: Promise<{ category: string }>;
};

async function ExplorePage({ params }: ExplorePage) {
  const { category } = await params;
  const t = await getTranslations("ExplorePage");
  console.log({ category });

  return (
    <section className="w-full flex flex-col gap-8 container mx-auto mt-28 px-6 md:px-0">
      <div className="flex flex-col gap-6">
        {/** TITLE */}
        <div className="flex flex-col gap-1">
          <H1>{t("browseArtworks")}</H1>
          <P className="text-md text-foreground/50">{t("discoverDigArt")}</P>
        </div>

        {/** CLIENT-SIDE | SEARCH & FILTER */}
        <div className="flex flex-col md:flex-row items-center gap-4">
          <FilterableSearch />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {productData.slice(0, 12).map((p, i) => (
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
                  <P className="text-foreground/50">{p.productDescriptions}</P>
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
    </section>
  );
}

export default ExplorePage;

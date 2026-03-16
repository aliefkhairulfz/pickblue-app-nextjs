import ButtonBadge from "@/components/ui/button-badge";
import ArtworkCard from "@/components/ui/card-image-simple";
import InputWithIcon from "@/components/ui/input-with-icon";
import { H1, P } from "@/components/ui/typography";
import productData from "@/public/product-data.json";

const filterableCategories = [
  "All",
  "Illustration",
  "Photography",
  "3D Art",
  "Pixel Art",
  "Concept Art",
  "Abstract",
];

async function BrowsePage() {
  return (
    <section className="w-full flex flex-col gap-8 container mx-auto mt-28 px-6 md:px-0">
      <div className="flex flex-col gap-6">
        {/** TITLE */}
        <div className="flex flex-col gap-1">
          <H1>Browse Artworks</H1>
          <P className="text-md text-foreground/50">
            Discover digital art from talented creators
          </P>
        </div>

        {/** SEARCH & FILTER */}
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="w-full md:w-[350px]">
            <InputWithIcon placeholder="Search artworks..." />
          </div>

          {/** FILTERABLE BUTTON BADGE */}
          <div className="flex flex-wrap items-center gap-2">
            {filterableCategories.map((f, i) => (
              <ButtonBadge key={i}>{f}</ButtonBadge>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {productData.map((img, i) => (
          <ArtworkCard key={i}>
            <ArtworkCard.Image src={img.image} alt={img.productName} />

            <ArtworkCard.Content>
              <ArtworkCard.Header>
                <div>
                  <ArtworkCard.Title>{img.productName}</ArtworkCard.Title>
                  <ArtworkCard.Author>{img.productAuthor}</ArtworkCard.Author>
                </div>

                <ArtworkCard.Price>Rp.{img.price}</ArtworkCard.Price>
              </ArtworkCard.Header>

              <ArtworkCard.Category>{img.productCategory}</ArtworkCard.Category>
            </ArtworkCard.Content>
          </ArtworkCard>
        ))}
      </div>
    </section>
  );
}

export default BrowsePage;

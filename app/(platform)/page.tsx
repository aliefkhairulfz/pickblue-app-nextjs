import CreatorCard from "@/components/ui/avatar-simple";
import Badge from "@/components/ui/badge";
import Button from "@/components/ui/button";
import ButtonNextlink from "@/components/ui/button-nextlink";
import ButtonNextlinkWithIcon from "@/components/ui/button-nextlink-with-icon";
import ArtworkCard from "@/components/ui/card-image-simple";
import Card from "@/components/ui/card-simple";
import NextLink from "@/components/ui/nextlink-with-icon";
import Separator from "@/components/ui/separator";
import { H1, H3, P } from "@/components/ui/typography";
import { ArrowRight, Sparkles } from "lucide-react";
import productData from "@/public/product-data.json";
import creatorData from "@/public/creator-data.json";

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="w-full min-h-screen flex items-center justify-center px-6">
        <div className="flex flex-col items-center gap-4 text-center max-w-3xl">
          <Badge icon={<Sparkles />}>The marketplace for digital creator</Badge>

          <div className="flex flex-col items-center leading-tight">
            <H1 className="text-4xl md:text-6xl lg:text-7xl font-black">
              Sell Your Art.
            </H1>

            <H1 className="text-4xl md:text-6xl lg:text-7xl font-black text-primary">
              Own Your Craft.
            </H1>
          </div>

          <P className="text-base md:text-lg text-foreground/50 max-w-xl">
            PickBlue empowers creators to build their own store and sell digital
            artwork to a global audience. No middleman, no hassle. Start selling
            your art.
          </P>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-2">
            <ButtonNextlinkWithIcon
              icon={<ArrowRight strokeWidth={3} />}
              href={"/dashboard"}
            >
              Start selling your art
            </ButtonNextlinkWithIcon>

            <ButtonNextlink intent={"outline"} href={"/browse"}>
              Browse artwork
            </ButtonNextlink>
          </div>
        </div>
      </section>

      {/* PRODUCT SECTION */}
      <section className="container mx-auto px-6 md:px-0 w-full min-h-[calc(100vh-250px)] flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <H3>Featured Artworks</H3>

          <NextLink
            href={"/explore"}
            iconPosition="right"
            icon={<ArrowRight size={20} strokeWidth={2.5} />}
          >
            View all
          </NextLink>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
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

                <ArtworkCard.Category>
                  {img.productCategory}
                </ArtworkCard.Category>
              </ArtworkCard.Content>
            </ArtworkCard>
          ))}
        </div>
      </section>

      <Separator />

      {/* CREATOR SECTION */}
      <section className="container mx-auto px-6 md:px-0 w-full min-h-[calc(100vh-200px)] flex flex-col gap-8 items-center mt-12">
        <H3>Trending Creators</H3>

        <div className="flex flex-wrap items-center justify-center gap-8 max-w-5xl">
          {creatorData.map((author, i) => (
            <CreatorCard key={i}>
              <CreatorCard.Avatar src={author.avatar} alt={author.name} />

              <CreatorCard.Name>{author.name}</CreatorCard.Name>

              <CreatorCard.Followers>
                {author.followers} followers
              </CreatorCard.Followers>
            </CreatorCard>
          ))}
        </div>

        <Card className="py-4 px-6 bg-primary/5 mt-20 max-w-md">
          <Card.Header className="flex items-center justify-center">
            <Card.Title>Ready to sell?</Card.Title>
          </Card.Header>

          <Card.Content className="pt-0 text-center">
            Create your store in minutes and start earning from your digital art
            today.
          </Card.Content>

          <Card.Footer className="flex items-center justify-center gap-1 pt-0">
            <Button>Get started for free</Button>
          </Card.Footer>
        </Card>
      </section>
    </>
  );
}

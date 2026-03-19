import Badge from "@/components/ui/badge";
import Button from "@/components/ui/button";
import ButtonNextlink from "@/components/ui/button-nextlink";
import ButtonNextlinkWithIcon from "@/components/ui/button-nextlink-with-icon";
import {
  default as Card,
  default as CardSimple,
} from "@/components/ui/card-simple";
import CreatorCard from "@/components/ui/creator-card";
import NextImage from "@/components/ui/next-image";
import NextLink from "@/components/ui/nextlink-with-icon";
import Separator from "@/components/ui/separator";
import { H1, H3, H5, P } from "@/components/ui/typography";
import creatorData from "@/public/creator-data.json";
import productData from "@/public/product-data.json";
import { ArrowRight, Sparkles } from "lucide-react";
import { getTranslations } from "next-intl/server";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "HomePage",
  });

  return (
    <>
      {/* HERO */}
      <section className="w-full min-h-screen flex items-center justify-center px-6">
        <div className="flex flex-col items-center gap-4 text-center max-w-3xl">
          <Badge
            variant="outline"
            className="bg-primary/10 p-2 px-4 shadow-xl shadow-primary/10 border border-primary/50 text-primary"
            icon={<Sparkles />}
          >
            {t("badge")}
          </Badge>

          <div className="flex flex-col items-center leading-tight">
            <H1 className="text-4xl md:text-6xl lg:text-7xl font-black">
              Sell Your Art.
            </H1>

            <H1 className="text-4xl md:text-6xl lg:text-7xl font-black text-primary">
              Own Your Craft.
            </H1>
          </div>

          <P className="text-base md:text-lg text-foreground/50 max-w-xl">
            {t("hero.description")}
          </P>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-2">
            <ButtonNextlinkWithIcon
              icon={<ArrowRight strokeWidth={3} />}
              href={`/${locale}/dashboard`}
            >
              {t("hero.startSelling")}
            </ButtonNextlinkWithIcon>

            <ButtonNextlink intent="outline" href={`/${locale}/explore/all`}>
              {t("hero.explore")}
            </ButtonNextlink>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="container mx-auto px-6 md:px-0 w-full min-h-[calc(100vh-300px)] flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <H3>{t("featured.title")}</H3>

          <NextLink
            href={`/${locale}/explore/all`}
            iconPosition="right"
            icon={<ArrowRight size={18} strokeWidth={2.5} />}
          >
            {t("featured.viewAll")}
          </NextLink>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {productData.slice(0, 5).map((p, i) => (
            <CardSimple className="w-full" key={i}>
              <div className="aspect-video" />
              <div className="absolute inset-0 aspect-video">
                <NextImage
                  className="aspect-video group overflow-hidden"
                  src={p.image}
                  alt={p.productName}
                />
              </div>

              <CardSimple.Header>
                <CardSimple.Title className="w-[60%]">
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
          ))}
        </div>
      </section>

      <Separator />

      {/* CREATORS */}
      <section className="container mx-auto px-6 md:px-0 w-full min-h-[calc(100vh-200px)] flex flex-col gap-8 items-center mt-12">
        <H3>{t("creators.title")}</H3>

        <div className="flex flex-wrap items-center justify-center gap-8 max-w-5xl">
          {creatorData.map((author, i) => (
            <CreatorCard key={i}>
              <CreatorCard.Avatar src={author.avatar} alt={author.name} />

              <CreatorCard.Name>{author.name}</CreatorCard.Name>

              <CreatorCard.Followers>
                {author.followers} {t("creators.followers")}
              </CreatorCard.Followers>
            </CreatorCard>
          ))}
        </div>

        <Card className="py-4 px-6 bg-primary/5 mt-20 max-w-md">
          <Card.Header>
            <Card.Title>
              <H3>{t("cta.title")}</H3>
            </Card.Title>
          </Card.Header>

          <Card.Content>{t("cta.description")}</Card.Content>

          <Card.Footer>
            <Button>{t("cta.button")}</Button>
          </Card.Footer>
        </Card>
      </section>
    </>
  );
}

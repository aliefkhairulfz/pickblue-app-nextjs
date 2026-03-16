import CreatorCardLongSimple from "@/components/ui/creator-card-long-simple";
import Badge from "@/components/ui/badge";
import Button from "@/components/ui/button";
import ButtonBadge from "@/components/ui/button-badge";
import Separator from "@/components/ui/separator";
import { H1, H2, P } from "@/components/ui/typography";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";

function ArtworkIdPage() {
  return (
    <div className="container mx-auto mt-[64px] min-h-[calc(100vh-64px)] px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* ARTWORK IMAGE */}
        <div className="w-full max-w-[620px]">
          <div className="relative aspect-square overflow-hidden rounded-3xl">
            <Image
              src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429"
              alt="artwork"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* ARTWORK INFO */}
        <div className="flex h-full max-w-[560px] flex-col justify-between gap-10">
          {/* TOP CONTENT */}
          <div className="flex flex-col gap-6">
            {/* CATEGORY */}
            <Badge variant={"default"} className="w-fit">
              Concept Art
            </Badge>

            {/* TITLE + DESCRIPTION */}
            <div className="flex flex-col gap-2">
              <H1>Browse Artworks</H1>

              <P className="text-md text-foreground/50">
                Abstract flowing colors that evoke emotions and movement. A
                mesmerizing piece of digital abstract art.
              </P>
            </div>

            {/* CREATOR */}
            <CreatorCardLongSimple>
              <CreatorCardLongSimple.Avatar
                src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429"
                alt="Abstract Mind"
              />

              <CreatorCardLongSimple.Content>
                <CreatorCardLongSimple.Name>
                  Abstract Mind
                </CreatorCardLongSimple.Name>

                <CreatorCardLongSimple.Followers>
                  6,700 followers
                </CreatorCardLongSimple.Followers>
              </CreatorCardLongSimple.Content>
            </CreatorCardLongSimple>

            {/* SIZE OPTIONS */}
            <div className="flex flex-col gap-2">
              <P>Sizes</P>

              <div className="flex flex-wrap gap-2">
                <ButtonBadge variant={"default"}>2560 x 1440</ButtonBadge>
                <ButtonBadge variant={"default"}>3840 x 2160</ButtonBadge>
                <ButtonBadge variant={"default"}>5120 x 2880</ButtonBadge>
              </div>
            </div>

            {/* SIZE OPTIONS */}
            <div className="flex flex-col gap-2">
              <P>Colors</P>

              <div className="flex flex-wrap gap-2">
                <ButtonBadge variant={"default"}>Red</ButtonBadge>
                <ButtonBadge variant={"default"}>Green</ButtonBadge>
                <ButtonBadge variant={"default"}>Blue</ButtonBadge>
              </div>
            </div>
          </div>

          {/* PURCHASE SECTION */}
          <div className="flex flex-col gap-6">
            <Separator />

            <div className="flex items-center justify-between gap-6">
              <H2 className="text-primary">Rp 5.000</H2>

              <Button className="flex items-center gap-2 px-6">
                <ShoppingCart size={18} />
                Add to cart
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArtworkIdPage;

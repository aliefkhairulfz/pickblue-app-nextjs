import CreatorCard from "@/components/ui/avatar-simple";
import Badge from "@/components/ui/badge";
import Button from "@/components/ui/button";
import ButtonWithIcon from "@/components/ui/button-with-icon";
import ArtworkCard from "@/components/ui/card-image-simple";
import Card from "@/components/ui/card-simple";
import NextLink from "@/components/ui/nextlink-with-icon";
import { H1, H3, P } from "@/components/ui/typography";
import { ArrowRight, Sparkles } from "lucide-react";

const payload = [
  {
    productName: "Resident Evil 9 Wallpapers",
    productAuthor: "Alief Khairul",
    productColor: "Neon Purple",
    productCategory: "wallpaper",
    price: "5000",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
  },
  {
    productName: "Resident Evil 9 Wallpapers",
    productAuthor: "Alief Khairul",
    productColor: "Midnight Black",
    productCategory: "illustration",
    price: "6500",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
  },
  {
    productName: "Resident Evil 9 Wallpapers",
    productAuthor: "Alief Khairul",
    productColor: "Blood Red",
    productCategory: "wallpaper",
    price: "9000",
    image:
      "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=600&h=600&fit=crop",
  },
  {
    productName: "Resident Evil 9 Wallpapers",
    productAuthor: "Alief Khairul",
    productColor: "Umbrella White",
    productCategory: "illustration",
    price: "11000",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  },
  {
    productName: "Resident Evil 9 Wallpapers",
    productAuthor: "Alief Khairul",
    productColor: "Metallic Gold",
    productCategory: "wallpaper",
    price: "9500",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&h=600&fit=crop",
  },
];

const payloadAuthor = [
  {
    id: 1,
    name: "Luna Artistry",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400",
    followers: 12400,
  },
  {
    id: 2,
    name: "Neon Brush",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400",
    followers: 8900,
  },
  {
    id: 3,
    name: "Pixel Dream",
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=400",
    followers: 15600,
  },
  {
    id: 4,
    name: "Aurora Studio",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400",
    followers: 10200,
  },
  {
    id: 5,
    name: "Ink Vision",
    avatar:
      "https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=400",
    followers: 7300,
  },
];

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
            <ButtonWithIcon
              className="shadow-xl shadow-primary/10"
              icon={<ArrowRight strokeWidth={3} />}
            >
              Start selling your art
            </ButtonWithIcon>

            <Button intent={"outline"}>Browse artwork</Button>
          </div>
        </div>
      </section>

      {/* PRODUCT SECTION */}
      <section className="w-full min-h-[calc(100vh-250px)] flex flex-col gap-6 px-6 md:px-8 max-w-7xl mx-auto">
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
          {payload.map((img, i) => (
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

      {/* CREATOR SECTION */}
      <section className="w-full min-h-[calc(100vh-200px)] flex flex-col gap-8 items-center px-6 md:px-8 border-t border-border pt-12">
        <H3>Trending Creators</H3>

        <div className="flex flex-wrap items-center justify-center gap-8 max-w-5xl">
          {payloadAuthor.map((author, i) => (
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
            <Button className="shadow-xl shadow-primary/10">
              Get started for free
            </Button>
          </Card.Footer>
        </Card>
      </section>

      {/* FOOTER */}
      <footer className="w-full border-t border-border mt-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            {/* Brand */}
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-semibold text-primary">PickBlue</h3>

              <p className="text-sm text-foreground/50 max-w-[260px]">
                The marketplace for digital creators. Sell your art, grow your
                audience.
              </p>
            </div>

            {/* Marketplace */}
            <div className="flex flex-col gap-3">
              <h4 className="font-semibold">Marketplace</h4>

              <ul className="flex flex-col gap-2 text-sm text-foreground/50">
                <li className="hover:text-foreground transition-colors cursor-pointer">
                  Browse Art
                </li>

                <li className="hover:text-foreground transition-colors cursor-pointer">
                  Categories
                </li>

                <li className="hover:text-foreground transition-colors cursor-pointer">
                  Trending
                </li>
              </ul>
            </div>

            {/* Creators */}
            <div className="flex flex-col gap-3">
              <h4 className="font-semibold">Creators</h4>

              <ul className="flex flex-col gap-2 text-sm text-foreground/50">
                <li className="hover:text-foreground transition-colors cursor-pointer">
                  Start Selling
                </li>

                <li className="hover:text-foreground transition-colors cursor-pointer">
                  Dashboard
                </li>
              </ul>
            </div>

            {/* Company */}
            <div className="flex flex-col gap-3">
              <h4 className="font-semibold">Company</h4>

              <ul className="flex flex-col gap-2 text-sm text-foreground/50">
                <li className="hover:text-foreground transition-colors cursor-pointer">
                  About
                </li>

                <li className="hover:text-foreground transition-colors cursor-pointer">
                  Terms
                </li>

                <li className="hover:text-foreground transition-colors cursor-pointer">
                  Privacy
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full h-px bg-border my-10" />

          <div className="text-center text-sm text-foreground/40">
            © 2026 PickBlue. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}

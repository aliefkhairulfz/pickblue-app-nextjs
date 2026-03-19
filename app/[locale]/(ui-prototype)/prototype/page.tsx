import Badge from "@/components/ui/badge";
import Button from "@/components/ui/button";
import ButtonBadge from "@/components/ui/button-badge";
import ButtonNextlink from "@/components/ui/button-nextlink";
import ButtonWithIcon from "@/components/ui/button-with-icon";
import CardSimple from "@/components/ui/card-simple";
import CardHorizontal from "@/components/ui/card-simple-horizontal";
import CreatorCard from "@/components/ui/creator-card";
import CreatorCardLongSimple from "@/components/ui/creator-card-long-simple";
import InputWithIcon from "@/components/ui/input-with-icon";
import NextImage from "@/components/ui/next-image";
import ProductForm from "@/components/ui/product-form";
import TableSimple from "@/components/ui/table-simple";
import { H1, H5, P } from "@/components/ui/typography";
import productData from "@/public/product-data.json";
import { cn } from "@/utils/cn";
import { CreditCard, DollarSign, Package, TrendingUp } from "lucide-react";

const dashboardStatistic = ["total-sales", "revenue", "products", "balance"];
export const dataTable = [
  {
    id: "p1",
    name: "Re9 Wallpapers",
    variants: [
      {
        id: "v1",
        name: "Gold Edition",
        category: "Premium",
        price: 29.99,
        image:
          "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=400",
      },
      {
        id: "v2",
        name: "Standard",
        category: "Basic",
        price: 19.99,
        image:
          "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=400",
      },
    ],
  },
  {
    id: "p2",
    name: "Re9 Wallpapers",
    variants: [
      {
        id: "v2",
        name: "Gold Edition",
        category: "Premium",
        price: 29.99,
        image:
          "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=400",
      },
      {
        id: "v2",
        name: "Standard",
        category: "Basic",
        price: 19.99,
        image:
          "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=400",
      },
    ],
  },
];

function ProtoType() {
  const pages = "container w-full mx-auto py-8 grid grid-cols-5 gap-2";

  return (
    <>
      <div className={pages}>
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
              <CardSimple.Title>
                <H5>{p.productName}</H5>
              </CardSimple.Title>

              <CardSimple.Description>
                <P>{p.productDescriptions}</P>
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

      <div className={cn(pages, "grid-cols-3")}>
        {productData.slice(0, 5).map((p, i) => (
          <CardHorizontal key={i}>
            <CardHorizontal.Image src={p.image} alt={p.productName} />

            <CardHorizontal.Content>
              <CardSimple.Title>
                <H5>{p.productName}</H5>
              </CardSimple.Title>

              <CardSimple.Description>
                <P>{p.productDescriptions}</P>
              </CardSimple.Description>

              <CardHorizontal.Footer>
                <span className="font-semibold">$29</span>
                <div className="flex items-center gap-2">
                  <Button intent={"outline"} className="p-2 py-0">
                    -
                  </Button>
                  <p>1</p>
                  <Button intent={"outline"} className="p-2 py-0">
                    +
                  </Button>
                </div>
              </CardHorizontal.Footer>
            </CardHorizontal.Content>
          </CardHorizontal>
        ))}
      </div>

      <div className={cn(pages, "grid-cols-10")}>
        <Badge>Art</Badge>
        <Badge>Illustration</Badge>
        <Badge>Concept Art</Badge>

        <Badge variant={"primary"}>Art</Badge>
        <Badge variant={"primary"}>Illustration</Badge>
        <Badge variant={"primary"}>Concept Art</Badge>

        <ButtonBadge>Art</ButtonBadge>
        <ButtonBadge>Illustration</ButtonBadge>
        <ButtonBadge>Concept Art</ButtonBadge>

        <ButtonBadge variant={"active"}>Art</ButtonBadge>
        <ButtonBadge variant={"active"}>Illustration</ButtonBadge>
        <ButtonBadge variant={"active"}>Concept Art</ButtonBadge>
      </div>

      <div className={cn(pages, "grid-cols-5")}>
        <Button>Button</Button>
        <Button intent={"outline"}>Button</Button>

        <ButtonWithIcon>Button</ButtonWithIcon>
        <ButtonWithIcon intent={"outline"}>Button</ButtonWithIcon>

        <ButtonNextlink href={"/"}>Button NextLink</ButtonNextlink>
        <ButtonNextlink href={"/"} intent={"outline"}>
          Button NextLink
        </ButtonNextlink>

        <InputWithIcon placeholder="Search artworks..." />
      </div>

      <div className={cn(pages, "grid-cols-2")}>
        <CreatorCard>
          <CreatorCard.Avatar
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
            alt="creator"
          >
            <CreatorCard.AvatarBadge />
          </CreatorCard.Avatar>

          <CreatorCard.Name>Luna Artistry</CreatorCard.Name>

          <CreatorCard.Followers>12.4k followers</CreatorCard.Followers>
        </CreatorCard>

        <CreatorCardLongSimple>
          <CreatorCardLongSimple.Avatar
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
            alt="creator"
          />

          <CreatorCardLongSimple.Content>
            <CreatorCardLongSimple.Name>
              Luna Artistry
            </CreatorCardLongSimple.Name>

            <CreatorCardLongSimple.Followers>
              12.4k followers
            </CreatorCardLongSimple.Followers>
          </CreatorCardLongSimple.Content>
        </CreatorCardLongSimple>
      </div>

      <div className={cn(pages, "grid-cols-4")}>
        {dashboardStatistic.map((ds, i) => {
          const chooseIcon = {
            "total-sales": <TrendingUp className="text-primary" />,
            revenue: <DollarSign className="text-primary" />,
            products: <Package className="text-primary" />,
            balance: <CreditCard className="text-primary" />,
          };

          return (
            <CardHorizontal className="py-5" key={i}>
              <div
                className="border border-border flex items-center justify-center
                rounded-md w-[35px] h-[35px] mx-2 bg-primary/15 mr-1"
              >
                {chooseIcon[ds as keyof typeof chooseIcon]}
              </div>

              <CardHorizontal.Content className="flex flex-col -space-y-1">
                <CardSimple.Title>
                  <P className="text-foreground/50">{ds}</P>
                </CardSimple.Title>

                <CardSimple.Description>
                  <H5>Rp.5000</H5>
                </CardSimple.Description>
              </CardHorizontal.Content>
            </CardHorizontal>
          );
        })}
      </div>
      <div className={cn(pages, "grid-cols-1")}>
        {/* <DashboardTabs /> */}
        <TableSimple />
      </div>

      <div className={cn(pages, "grid-cols-3")}>
        <CardSimple className="w-full p-2">
          <CardSimple.Header>
            <CardSimple.Title>
              <P>Available balance</P>
            </CardSimple.Title>

            <CardSimple.Description>
              <H1 className="text-primary">Rp.5000</H1>
            </CardSimple.Description>
          </CardSimple.Header>

          <CardSimple.Content className="-py-10">
            <P className="text-foreground/50">0% platform fee applied</P>
          </CardSimple.Content>

          <CardSimple.Footer className="flex flex-col items-center gap-2">
            <Button className="w-full">Request Payout</Button>
            <P className="text-foreground/50">
              Payouts are processed within 3-5 business days.
            </P>
          </CardSimple.Footer>
        </CardSimple>
      </div>

      <div className={cn(pages, "grid-cols-1")}>
        <ProductForm />
      </div>
    </>
  );
}

export default ProtoType;

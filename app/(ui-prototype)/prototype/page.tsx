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
import { H5, P } from "@/components/ui/typography";
import productData from "@/public/product-data.json";
import { cn } from "@/utils/cn";

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
    </>
  );
}

export default ProtoType;

import Button from "@/components/ui/button";
import CardSimple from "@/components/ui/card-simple";
import { H1, P } from "@/components/ui/typography";

function Payout() {
  return (
    <CardSimple className="w-full md:w-xl p-2">
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
  );
}

export default Payout;

import CardSimple from "@/components/ui/card-simple";
import CardHorizontal from "@/components/ui/card-simple-horizontal";
import { H1, H5, P } from "@/components/ui/typography";
import { CreditCard, DollarSign, Package, TrendingUp } from "lucide-react";
import ProductsCreator from "../components/products-creator";

const dashboardStatistic = ["total-sales", "revenue", "products", "balance"];

async function DashboardPage() {
  const pages =
    "container w-full mx-auto py-8 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2";

  return (
    <div className="container mx-auto px-6 md:px-0 mt-28 pb-28">
      {/** HEADER */}
      <div>
        <H1>Creator Dashboard</H1>
        <P className="text-md text-foreground/50">
          Manage your store, products, and earnings
        </P>

        <div className={pages}>
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
      </div>

      {/** MAIN */}
      <ProductsCreator />
    </div>
  );
}

export default DashboardPage;

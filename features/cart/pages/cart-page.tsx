import productData from "@/public/product-data.json";
import CartSetable from "../components/cart-setable";
import Checkoutable from "../components/checkoutable";

export type Items = typeof productData;

function CartPage() {
  const items = productData.slice(0, 5);
  const subtotal = items.length * 29;

  return (
    <div className="mt-[64px] container mx-auto px-6 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-4">
        {/* CART ITEMS */}
        <CartSetable items={items} />
        <Checkoutable subTotal={subtotal} />
      </div>
    </div>
  );
}

export default CartPage;

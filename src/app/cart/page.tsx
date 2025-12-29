import { Cart } from "@/components/2025/week-52/Cart";
import { PageTitle } from "@/components/2025/week-52/ProductCategoryFilter";

export default async function ShoppingCart() {
  return (
    <div>
      <PageTitle title="Shopping Cart" />
      <Cart />
    </div>
  )
}

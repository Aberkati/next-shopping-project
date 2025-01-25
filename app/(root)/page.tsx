import ProductList from "@/components/shared/product/product-list";
import { getLatstProducts } from "@/lib/actions/product.actions";
const HomePage = async () => {
  const latestProducts = await getLatstProducts();
  return (
    <>
      <ProductList data={latestProducts} title="Nouveautés" limit={4} />
    </>
  );
};

export default HomePage;

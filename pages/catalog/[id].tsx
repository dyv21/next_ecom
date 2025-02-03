import ProductViewItem from "@/components/ProductViewItem/ProductViewItem";
import { useFetchProduct } from "@/hooks/useFetchProduct";
import DefaultLayout from "@/layouts/default";

function Product() {

  const product = useFetchProduct()
  return (
    <DefaultLayout>
      {product && <ProductViewItem {...product}/>}
    </DefaultLayout>
  );
}

export default Product;
import ProductViewItem from "@/components/ProductViewItem/ProductViewItem";
import { ProductType, useFetchProduct } from "@/hooks/useFetchProduct";
import DefaultLayout from "@/layouts/default";
import { API } from "@/shared/api/api";

type PropsType = {
  product: ProductType;
  error: null | string;
};

export const getStaticPaths = async () => {
  try {
    const res = await API.getGoods();
    const paths = res.data.products.map((product: ProductType) => ({
      params: { id: product.id.toString() },
    }));
    return {
      paths,
      fallback: false,
    };
  } catch (error) {
    return {
      paths: [],
      fallback: false,
    };
  }
};

export const getStaticProps = async ({
  params,
}: {
  params: { id: string };
}) => {
  try {
    const res = await API.getSingleProduct(params.id);
    return {
      props: {
        product: res.data,
        error: null,
      },
    };
  } catch (error: any) {
    return {
      props: {
        product: null,
        error: error.message || "Ошибка загрузки данных",
      },
    };
  }
};

function Product(props: PropsType) {
  const { product, error } = props;

  // const product = useFetchProduct()
  return (
    <DefaultLayout>
      {error ? <h3>{error}</h3> : <ProductViewItem {...product} />}
    </DefaultLayout>
  );
}

export default Product;

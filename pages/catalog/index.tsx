import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import ProductsList from "@/components/ProductList/ProductsList";
import { API } from "@/shared/api/api";
import { ProductThumbType } from "@/hooks/useFetchGoods";
import { GetStaticProps } from "next";

type PropsType = {
  products: ProductThumbType[];
  error: string | null;
};

export const getStaticProps: GetStaticProps<PropsType> = async () => {
  try {
    const res = await API.getProducts();
    return {
      props: {
        products: res.data.products,
        error: null,
      },
    };
  } catch (error: any) {
    return {
      props: {
        products: [],
        error: error.message || "Ошибка загрузки данных",
      },
    };
  }
};

const Catalog = ({ products, error }: PropsType) => {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block text-center justify-center">
          <h1 className={title({ color: "violet" })}>Catalog</h1>
          {error ? <h3>{error}</h3> : <ProductsList products={products} />}
        </div>
      </section>
    </DefaultLayout>
  );
};

export default Catalog;

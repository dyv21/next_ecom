import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import ProductsList from "@/components/products-list/products-list";
import { API } from "@/shared/api/api";
import { ProductThumbType } from "@/hooks/useFetchGoods";
import { GetStaticProps } from "next";
import Sidebar from "@/components/sdebar/sidebar";

type PropsType = {
  products: ProductThumbType[];
  categories: string[];
  error: string | null;
};

export const getStaticProps: GetStaticProps<PropsType> = async () => {
  try {
    const res = await API.getProducts();
    const categories = await API.getCategories();
    return {
      props: {
        products: res.data.products,
        categories: categories.data,
        error: null,
      },
    };
  } catch (error: any) {
    return {
      props: {
        products: [],
        categories: [],
        error: error.message || "Ошибка загрузки данных",
      },
    };
  }
};

const Catalog = ({ products, categories, error }: PropsType) => {
  return (
    <DefaultLayout>
      <section className="flex justify-center gap-4 py-8 md:py-10">
        <Sidebar categories={categories} />
        <div className="inline-block text-center justify-center">
          <h1 className={title({ color: "violet" })}>Catalog</h1>
          {error ? <h3>{error}</h3> : <ProductsList products={products} />}
        </div>
      </section>
    </DefaultLayout>
  );
};

export default Catalog;

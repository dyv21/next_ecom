import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import ProductsList from "@/components/ProductList/ProductsList";
import { API } from "@/shared/api/api";
import { ProductThumbType } from "@/hooks/useFetchGoods";
import { GetStaticProps } from "next";

type PropsType = {
  goodsList: ProductThumbType[];
  error: string | null;
};

export const getStaticProps: GetStaticProps<PropsType> = async () => {
  try {
    const res = await API.getGoods();
    return {
      props: {
        goodsList: res.data.products,
        error: null,
      },
    };
  } catch (error: any) {
    return {
      props: {
        goodsList: [],
        error: error.message || "Ошибка загрузки данных",
      },
    };
  }
};

const Catalog = (props: PropsType) => {
  const { goodsList, error } = props;
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block text-center justify-center">
          <h1 className={title({ color: "violet" })}>Catalog</h1>
          {error ? <h3>{error}</h3> : <ProductsList goodsList={goodsList} />}
        </div>
      </section>
    </DefaultLayout>
  );
};

export default Catalog;

import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import ProductsList from "@/components/ProductList/ProductsList";
import { API } from "@/shared/api/api";
import { ProductThumbType } from "@/hooks/useFetchGoods";

export const getStaticProps = async () => {
  const res = await API.getGoods();
  return {
    props: {
      goodsList: res.data.products,
    },
  };
};

type PropsType = {
  goodsList: ProductThumbType[];
};

const Catalog = (props: PropsType) => {
  const { goodsList } = props;
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block text-center justify-center">
          <h1 className={title({ color: "violet" })}>Catalog</h1>
          <ProductsList goodsList={goodsList} />
        </div>
      </section>
    </DefaultLayout>
  );
};

export default Catalog;

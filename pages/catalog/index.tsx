import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import ProductsGrid from "@/components/ProductList/ProductList";

export default function DocsPage() {

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block text-center justify-center">
          <h1 className={title({ color: "violet" })}>Catalog</h1>
          <ProductsGrid  />
        </div>
      </section>
    </DefaultLayout>
  );
}

import DefaultLayout from "@/layouts/default";
import { useSearchParams } from "next/navigation";
import { title } from "@/components/primitives";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams ? searchParams.get("q") : null;

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <h1 className={title({ color: "violet" })}>Search {query}</h1>
      </section>
    </DefaultLayout>
  );
}

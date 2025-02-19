import Link from "next/link";

type PropsType = {
  categories: string[];
};

export default function Sidebar(props: PropsType) {
  const { categories } = props;

  return (
    <div className="hidden lg:block w-full max-w-[260px] px-1 py-2 mt-10">
      <ul className="flex flex-col gap-2">
        {categories.map((category) => (
          <li key={category}>
            <Link
              href={`/catalog/${category.toLowerCase()}`}
              className="text-sm foreground hover:text-primary"
            >
              {category.split("-").join(" ").toUpperCase()}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

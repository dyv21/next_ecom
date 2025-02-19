import { Listbox, ListboxItem } from "@heroui/react";

type PropsType = {
  categories: string[];
};

export default function Sidebar(props: PropsType) {
  const { categories } = props;

  const items = categories.map((category) => {
    return {
      key: category,
      label: category.split("-").join(" ").toUpperCase(),
    };
  });

  return (
    <div className="hidden lg:block w-full max-w-[260px] px-1 py-2 mt-10">
      <Listbox aria-label="Dynamic Actions" items={items}>
        {(item) => (
          <ListboxItem
            key={item.key}
            className={item.key === "delete" ? "text-danger" : ""}
            color={item.key === "delete" ? "danger" : "default"}
          >
            {item.label}
          </ListboxItem>
        )}
      </Listbox>
    </div>
  );
}

import { Listbox, ListboxItem } from "@heroui/react";

export default function Sidebar() {
  const items = [
    {
      key: "new",
      label: "New file",
    },
    {
      key: "copy",
      label: "Copy link",
    },
    {
      key: "edit",
      label: "Edit file",
    },
    {
      key: "delete",
      label: "Delete file",
    },
  ];

  return (
    <div className="w-full max-w-[260px] px-1 py-2 mt-10">
      <Listbox
        aria-label="Dynamic Actions"
        items={items}
        onAction={(key) => alert(key)}
      >
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

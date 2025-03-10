import { Link } from "@heroui/link";
import { Icon } from "@iconify/react";
import React from "react";
import { siteConfig } from "@/config/site";

export const ShoppingCart = () => {
  return (
    <Link href={siteConfig.links.cart} className={"flex gap-1"}>
      <Icon
        className="text-3xl text-default-500"
        icon="solar:cart-check-outline"
      />
    </Link>
  );
};

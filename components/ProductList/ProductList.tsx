import React from "react";
import { cn } from "@heroui/react";
import ProductListItem from "@/components/ProductItem/ProductItem";
import { useFetchGoods } from "@/hooks/useFetchGoods";
import SkeletonComponent from "@/components/Skeleton/Skeleton";

export type ProductGridProps = React.HTMLAttributes<HTMLDivElement> & {
  itemClassName?: string;
};

const ProductsGrid = React.forwardRef<HTMLDivElement, ProductGridProps>(
  ({ itemClassName, className, ...props }, ref) => {
    const { goodsList, loading, error } = useFetchGoods();
    {
      if (error) return <p>Ошибка: {error}</p>;
    }

    return (
      <div
        ref={ref}
        className={cn(
          "grid w-full grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
          className,
        )}
        {...props}
      >
        {loading
          ? Array.from({ length: 20 })
              .fill(null)
              .map((_, i) => <SkeletonComponent />)
          : goodsList &&
            goodsList.map((product) => (
              <ProductListItem
                key={product.id}
                removeWrapper
                {...product}
                className={cn("w-full snap-start", itemClassName)}
              />
            ))}
      </div>
    );
  },
);

ProductsGrid.displayName = "ProductsGrid";

export default ProductsGrid;

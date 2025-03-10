"use client";

import React from "react";
import { Button, Image } from "@heroui/react";
import { Icon } from "@iconify/react";
import { cn } from "@heroui/react";

import { Link } from "@heroui/link";
import RatingRadioGroup from "@/shared/ui/radio/rating-radio-group";

export type ProductListItemColor = {
  name: string;
  hex: string;
};

export type ProductItem = {
  id: string;
  title: string;
  href?: string;
  price: number;
  color?: string;
  size?: string;
  isNew?: boolean;
  rating?: number;
  availableColors?: ProductListItemColor[];
  ratingCount?: number;
  description?: string;
  imageSrc?: string;
  thumbnail: string;
};

export type ProductListItemProps = Omit<
  React.HTMLAttributes<HTMLDivElement>,
  "id"
> & {
  isPopular?: boolean;
  removeWrapper?: boolean;
} & ProductItem;

const ProductListItem = React.forwardRef<HTMLDivElement, ProductListItemProps>(
  (
    {
      id,
      title,
      price,
      rating,
      ratingCount,
      description,
      imageSrc,
      isPopular,
      removeWrapper,
      className,
      thumbnail,
      isNew,
      ...props
    },
    ref,
  ) => {
    const [isStarred, setIsStarred] = React.useState(false);

    return (
      <div
        ref={ref}
        className={cn(
          "relative flex w-64 max-w-full flex-none scroll-ml-6 flex-col gap-3 rounded-large bg-content1 p-4 shadow-medium",
          {
            "rounded-none bg-transparent shadow-none": removeWrapper,
          },
          className,
        )}
      >
        {isNew && isPopular ? (
          <span className="absolute right-7 top-7 z-20 text-tiny font-semibold text-default-400">
            NEW
          </span>
        ) : null}
        <Button
          isIconOnly
          className={cn("absolute right-6 top-6 z-20", {
            hidden: isPopular,
          })}
          radius="full"
          size="sm"
          variant="flat"
          onPress={() => setIsStarred(!isStarred)}
        >
          <Icon
            className={cn("text-default-500", {
              "text-warning": isStarred,
            })}
            icon="solar:star-bold"
            width={16}
          />
        </Button>
        <div
          className={cn(
            "relative flex h-52 max-h-full w-full flex-col items-center justify-center overflow-visible rounded-medium bg-content2",
            {
              "h-full justify-between": isPopular,
            },
          )}
        >
          <div
            className={cn("flex flex-col gap-2 px-4 pt-6", {
              hidden: !isPopular,
            })}
          >
            <h3 className="text-xl font-semibold tracking-tight text-default-800">
              {title}
            </h3>
            <p className="text-small text-default-500">{description}</p>
          </div>
          <Link href={`/catalog/${id}`}>
            <Image
              removeWrapper
              alt={title}
              className={cn(
                "z-0 h-full max-h-full w-full max-w-[80%] overflow-visible object-contain object-center hover:scale-110",
                {
                  "flex h-56 w-56 items-center": isPopular,
                },
              )}
              src={thumbnail}
            />
          </Link>
        </div>
        <div className="flex flex-col gap-3 px-1">
          <div
            className={cn("flex items-center justify-between", {
              hidden: isPopular,
            })}
          >
            <Link href={`/catalog/${id}`}>
              <h3 className="text-medium font-medium text-default-700 truncate w-40">
                {title}
              </h3>
            </Link>
            <p className="text-medium font-medium text-default-500">${price}</p>
          </div>
          {description && !isPopular ? (
            <p className="text-small text-default-500 line-clamp-3">
              {description}
            </p>
          ) : null}
          {rating !== undefined ? (
            <RatingRadioGroup
              hideStarsText
              isReadOnly
              className="gap-1"
              label={<p className="text-small text-default-400">{rating}</p>}
              size="sm"
              value={`${rating}`}
            />
          ) : null}
          <div className="flex gap-2">
            {isPopular ? (
              <Button
                fullWidth
                className="bg-default-300/20 font-medium text-default-700"
                radius="lg"
                variant="flat"
              >
                Save
              </Button>
            ) : null}
            <Button
              fullWidth
              className="font-medium"
              color="primary"
              radius="lg"
              variant={isPopular ? "flat" : "solid"}
            >
              Add to cart
            </Button>
          </div>
        </div>
      </div>
    );
  },
);

ProductListItem.displayName = "ProductListItem";

export default ProductListItem;

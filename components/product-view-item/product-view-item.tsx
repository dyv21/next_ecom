"use client";

import React from "react";
import {
  Accordion,
  AccordionItem,
  BreadcrumbItem,
  Button,
  Chip,
  Image,
  Link,
  ScrollShadow,
} from "@heroui/react";
import { Icon } from "@iconify/react";
import { cn } from "@heroui/react";

import { Breadcrumbs } from "@heroui/breadcrumbs";
import Review from "@/components/review/review";
import RatingRadioGroup from "@/shared/ui/radio/rating-radio-group";
import Head from "next/head";
import { usePathname } from "next/navigation";

export type ProductViewItem = {
  id: string;
  title: string;
  description?: string;
  images: string[];
  price: number;
  rating?: number;
  ratingCount?: number;
  sizes?: string[];
  isPopular?: boolean;
  reviews?: [];
  brand: string;
};

export type ProductViewInfoProps = Omit<
  React.HTMLAttributes<HTMLDivElement>,
  "id"
> & {
  isPopular?: boolean;
  isLoading?: boolean;
  removeWrapper?: boolean;
} & ProductViewItem;

const details = [
  {
    title: "Information",
    items: [
      "Fits small; we recommend ordering a half size up",
      "Mid-weight, non-stretchy fabric",
      "Designed for a mini length",
    ],
  },
  {
    title: "Shipping & Returns",
    items: [
      "Free shipping & returns",
      "Free, no-hassle returns",
      "Complimentary gift packaging",
      "Ships within 24 hours!",
    ],
  },
  {
    title: "Designer Notes",
    items: [
      "Fits small; we recommend ordering a half size up",
      "Mid-weight, non-stretchy fabric",
      "Designed for a mini length",
    ],
  },
];

const ProductViewInfo = React.forwardRef<HTMLDivElement, ProductViewInfoProps>(
  (
    {
      id,
      title,
      images,
      price,
      sizes,
      description,
      rating,
      ratingCount,
      isPopular,
      className,
      reviews,
      brand = "unknown",
      ...props
    },
    ref,
  ) => {
    const [isStarred, setIsStarred] = React.useState(false);
    const [selectedImage, setSelectedImage] = React.useState(images[0]);

    const brandToUrl = (brand: string) =>
      brand.toLowerCase().split(" ").join("_");

    const pathname = usePathname();

    const schemaData = {
      "@context": "https://schema.org",
      "@type": "Product",
      name: title,
      image: images,
      description: description,
      brand: {
        "@type": "Brand",
        name: brand,
      },
      sku: id,
      offers: {
        "@type": "Offer",
        url: `http://localhost:8080${pathname}`,
        priceCurrency: "USD",
        price: price,
        availability: "https://schema.org/InStock",
        itemCondition: "https://schema.org/NewCondition",
      },
    };

    return (
      <>
        <Head>
          <title>
            {title} buy for ${price}
          </title>
          <meta name="description" content={description} />
          <meta name="keywords" content={title} />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
          />
        </Head>
        <Breadcrumbs>
          <BreadcrumbItem>
            <Link href={"/"}>Home</Link>
          </BreadcrumbItem>
          {brand === "unknown" ? (
            ""
          ) : (
            <BreadcrumbItem>
              <Link href={`/${brandToUrl(brand)}`}>{brand}</Link>
            </BreadcrumbItem>
          )}

          <BreadcrumbItem>{title}</BreadcrumbItem>
        </Breadcrumbs>
        <div
          ref={ref}
          className={cn(
            "relative flex flex-col gap-4 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8",
            className,
          )}
        >
          {/* Product Gallery */}
          <div className="relative h-full w-full flex-none">
            {isPopular && (
              <Chip
                className="absolute left-3 top-3 z-20 h-10 gap-1 bg-background/60 pl-3 pr-2 text-foreground/90 shadow-medium backdrop-blur-md backdrop-saturate-150 dark:bg-default-100/50"
                size="lg"
                startContent={<Icon icon="solar:star-bold" />}
              >
                Popular
              </Chip>
            )}
            {/* Main Image */}
            <Image
              alt={title}
              className="h-full w-full"
              radius="lg"
              src={selectedImage}
            />
            {/* Image Gallery */}
            <ScrollShadow
              className="-mx-2 -mb-4 mt-4 flex w-full max-w-full gap-4 px-2 pb-4 pt-2"
              orientation="horizontal"
            >
              {images.map((image, index) => (
                <button
                  key={`${image}-${index}`}
                  className="relative h-24 w-24 flex-none cursor-pointer items-center justify-center rounded-medium ring-offset-background transition-shadow data-[selected=true]:outline-none data-[selected=true]:ring-2 data-[selected=true]:ring-focus data-[selected=true]:ring-offset-2"
                  data-selected={image === selectedImage}
                  onClick={() => setSelectedImage(image)}
                >
                  <Image
                    removeWrapper
                    alt={title}
                    classNames={{
                      img: "h-full w-full",
                    }}
                    radius="lg"
                    src={image}
                  />
                </button>
              ))}
            </ScrollShadow>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
            <h2 className="sr-only">Product information</h2>
            <div className="my-2 flex items-center gap-2">
              <RatingRadioGroup hideStarsText size="sm" value={`${rating}`} />
              <p className="text-small text-default-400">
                {ratingCount} {ratingCount === 1 ? "review" : "reviews"}
              </p>
            </div>
            <p className="text-xl font-medium tracking-tight">${price}</p>
            <div className="mt-4">
              <p className="sr-only">Product description</p>
              <p className="line-clamp-3 text-medium text-default-500">
                {description}1
              </p>
            </div>
            <div className="mt-6 flex flex-col gap-1">
              <div className="mb-4 flex items-center gap-2 text-default-700">
                <Icon icon="carbon:delivery" width={24} />
                <p className="text-small font-medium">
                  Free shipping and 30 days return
                </p>
              </div>
              <Link
                isExternal
                className="my-2 text-default-400"
                href="#"
                size="sm"
              >
                See guide
                <Icon
                  className="[&>path]:stroke-[2px]"
                  icon="solar:arrow-right-up-linear"
                />
              </Link>
            </div>
            <Accordion
              className="-mx-1 mt-2"
              itemClasses={{
                title: "text-default-400",
                content: "pt-0 pb-6 text-base text-default-500",
              }}
              items={details}
              selectionMode="multiple"
            >
              {details
                ? details.map(({ title, items }) => (
                    <AccordionItem key={title} title={title}>
                      <ul className="list-inside list-disc">
                        {items.map((item) => (
                          <li key={item} className="text-default-500">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </AccordionItem>
                  ))
                : []}
            </Accordion>
            <div className="mt-2 flex gap-2">
              <Button
                fullWidth
                className="text-medium font-medium"
                color="primary"
                size="lg"
                startContent={
                  <Icon icon="solar:cart-large-2-bold" width={24} />
                }
              >
                Add to cart
              </Button>
              <Button
                isIconOnly
                className="text-default-600"
                size="lg"
                variant="flat"
                onPress={() => setIsStarred(!isStarred)}
              >
                {isStarred ? (
                  <Icon icon="solar:heart-bold" width={24} />
                ) : (
                  <Icon icon="solar:heart-linear" width={24} />
                )}
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <h1 className={"text-lg mt-4 mb-4"}>Reviews</h1>
          {reviews &&
            reviews.map((review, i) => <Review review={review} key={i} />)}
        </div>
      </>
    );
  },
);

ProductViewInfo.displayName = "ProductViewInfo";

export default ProductViewInfo;

import type {ReviewType} from "./ReviewComponent";

import React from "react";
import {cn} from "@heroui/react";
import ReviewComponent from "@/components/Review/ReviewComponent";


export type CardReviewProps = React.HTMLAttributes<HTMLDivElement> & ReviewType;

const CardReview = React.forwardRef<HTMLDivElement, CardReviewProps>(
  ({className, ...review}, ref) => (
    <div ref={ref} className={cn("rounded-medium bg-content1 p-5 shadow-small", className)}>
      <ReviewComponent {...review} />
    </div>
  ),
);

CardReview.displayName = "CardReview";

export default CardReview;

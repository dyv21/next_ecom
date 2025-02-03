import React from "react";
import CardReview from "@/components/Review/CardReview";

type ReviewProps = {
  review: {
    rating: number;
    reviewerName: string;
    comment: string;
  };
};

export default function Review(props: ReviewProps) {
  const { rating, reviewerName, comment } = props.review;

  console.log();
  return (
    <div className="flex flex-col gap-4 mb-5">
      <CardReview
        content={comment}
        createdAt="2021-08-01T12:00:00.000Z"
        rating={rating}
        title="Great product"
        user={{
          name: reviewerName,
          avatar: `https://i.pravatar.cc/15${Math.floor(Math.random() * 9)}`,
        }}
      />
    </div>
  );
}

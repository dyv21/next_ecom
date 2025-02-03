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

  return (
    <div className="flex flex-col gap-4 mb-5">
      <CardReview
        content={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus, distinctio placeat quas qui quibusdam quod rem tenetur. '}
        createdAt="2021-08-01T12:00:00.000Z"
        rating={rating}
        title={comment}
        user={{
          name: reviewerName,
          avatar: `https://i.pravatar.cc/15${Math.floor(Math.random() * 9)}`,
        }}
      />

    </div>
  );
}

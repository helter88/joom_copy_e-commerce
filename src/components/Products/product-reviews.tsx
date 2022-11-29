import React from "react";
import useComments from "../../hooks/use-comments";

const ProductReviews = () => {
  const { comments } = useComments();
  const allComents = comments?.comments.map((comment: any) => {
    return (
      <div key={comment?.id}>
        <p className="text-sm font-medium  text-stone-800">
          {comment?.user?.username}
        </p>
        <p className="text-sm  text-stone-800 opacity-90 my-3 pb-2 border-b">
          {comment?.body}
        </p>
      </div>
    );
  });
  return (
    <div>
      <div className="flex my-2 text-lg font-medium  text-stone-800 space-x-2">
        <p>Reviews:</p>
        <p className="opacity-50">{`${comments?.total ?? 0}`}</p>
      </div>
      <div className="ml-8">{allComents}</div>
    </div>
  );
};

export default ProductReviews;

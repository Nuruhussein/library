// resources/js/Pages/Reviews/Index.jsx

import { Link } from "@inertiajs/react";
import React from "react";

const ReviewsIndex = ({ book, reviews }) => {
    return (
        <div>
            <h1>Reviews for {book.title}</h1>
            {reviews.length > 0 ? (
                reviews.map((review) => (
                    <div key={review.id}>
                        <Link href={`/reviews/${review.id}`}>
                            <p>
                                <strong>
                                    {review.reviewer || "Anonymous"}
                                </strong>
                            </p>
                        </Link>
                        <p>{review.comment}</p>
                    </div>
                ))
            ) : (
                <p>No reviews for this book yet.</p>
            )}
        </div>
    );
};

export default ReviewsIndex;

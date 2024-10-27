import React from "react";

const ShowBook = ({ book }) => {
    return (
        <div>
            <h1>{book.title}</h1>
            <p>
                <strong>Author:</strong> {book.author.name}
            </p>
            <p>
                <strong>Category:</strong> {book.category.name}
            </p>
            <p>
                <strong>Description:</strong>{" "}
                {book.description || "No description available"}
            </p>
            <p>
                <strong>ISBN:</strong> {book.isbn || "N/A"}
            </p>
            <p>
                <strong>Publication Date:</strong>{" "}
                {book.publication_date || "N/A"}
            </p>

            {book.cover_image ? (
                <div>
                    <img
                        src={`/storage/${book.cover_image}`}
                        alt={`${book.title} cover`}
                        width="150"
                    />
                </div>
            ) : (
                <p>No Cover Image</p>
            )}

            <h2>Reviews</h2>
            {book.reviews.length > 0 ? (
                <ul>
                    {book.reviews.map((review) => (
                        <li key={review.id}>
                            <p>
                                <strong>Reviewer:</strong>{" "}
                                {review.reviewer || "Anonymous"}
                            </p>
                            <p>{review.comment}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No reviews available</p>
            )}
        </div>
    );
};

export default ShowBook;

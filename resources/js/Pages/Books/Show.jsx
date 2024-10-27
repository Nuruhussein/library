import React from "react";

const Show = ({ book }) => (
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
            {book.description || "No description available."}
        </p>
        <p>
            <strong>ISBN:</strong> {book.isbn || "N/A"}
        </p>
        <p>
            <strong>Publication Date:</strong> {book.publication_date || "N/A"}
        </p>

        {book.cover_image ? (
            <div>
                <img
                    src={`/storage/${book.cover_image}`}
                    alt={`${book.title} cover`}
                    style={{ width: "200px", height: "auto" }}
                />
            </div>
        ) : (
            <p>No cover image available.</p>
        )}
    </div>
);

export default Show;

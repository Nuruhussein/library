import React from "react";

const Show = ({ author }) => (
    <div>
        <h1>{author.name}</h1>
        <p>
            <strong>Biography:</strong>{" "}
            {author.bio || "No biography available."}
        </p>

        {author.books && author.books.length > 0 ? (
            <div>
                <h2>Books by {author.name}:</h2>
                <ul>
                    {author.books.map((book) => (
                        <li key={book.id}>
                            <strong>{book.title}</strong>
                        </li>
                    ))}
                </ul>
            </div>
        ) : (
            <p>No books found for this author.</p>
        )}
    </div>
);

export default Show;

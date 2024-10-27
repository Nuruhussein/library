import React from "react";

const Show = ({ category }) => (
    <div>
        <h1>{category.name}</h1>
        <p>
            <strong>Description:</strong>{" "}
            {category.description || "No description available."}
        </p>

        {category.books && category.books.length > 0 ? (
            <div>
                <h2>Books in {category.name}:</h2>
                <ul>
                    {category.books.map((book) => (
                        <li key={book.id}>
                            <strong>{book.title}</strong>
                        </li>
                    ))}
                </ul>
            </div>
        ) : (
            <p>No books found in this category.</p>
        )}
    </div>
);

export default Show;

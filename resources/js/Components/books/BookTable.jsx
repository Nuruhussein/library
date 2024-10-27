import React from "react";

const BookTable = ({ books }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Category</th>
                    <th>Description</th>
                    <th>ISBN</th>
                    <th>Publication Date</th>
                    <th>Cover Image</th>
                </tr>
            </thead>
            <tbody>
                {books.map((book) => (
                    <tr key={book.id}>
                        <td>{book.title}</td>
                        <td>{book.author.name}</td>
                        <td>{book.category.name}</td>
                        <td>{book.description}</td>
                        <td>{book.isbn}</td>
                        <td>{book.publication_date}</td>
                        <td>
                            {book.cover_image ? (
                                <img
                                    src={`/storage/${book.cover_image}`}
                                    alt={book.title}
                                    width="50"
                                />
                            ) : (
                                "No Image"
                            )}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default BookTable;

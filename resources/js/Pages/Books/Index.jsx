import BookTable from "@/Components/books/BookTable";
import CreateBookForm from "@/Components/books/CreateBookForm";
import React from "react";

const BooksIndex = ({ books, authors, categories }) => {
    return (
        <div>
            <h1>Books</h1>
            <CreateBookForm authors={authors} categories={categories} />

            <BookTable books={books} />
        </div>
    );
};

export default BooksIndex;

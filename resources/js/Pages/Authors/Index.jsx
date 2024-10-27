import React from "react";
import { Link } from "@inertiajs/react";

const Index = ({ authors }) => (
    <div>
        <h1>Authors</h1>
        <Link href="/authors/create">Add New Author</Link>
        <ul>
            {authors.map((author) => (
                <li key={author.id}>
                    <Link href={`/authors/${author.id}`}>{author.name}</Link>
                </li>
            ))}
        </ul>
    </div>
);

export default Index;

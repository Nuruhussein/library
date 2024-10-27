import React from "react";
import { Link } from "@inertiajs/react";

const Index = ({ categories }) => (
    <div>
        <h1>Categories</h1>
        <Link href="/categories/create">Add New Category</Link>
        <ul>
            {categories.map((category) => (
                <li key={category.id}>
                    <Link href={`/categories/${category.id}`}>
                        {category.name}
                    </Link>
                </li>
            ))}
        </ul>
    </div>
);

export default Index;

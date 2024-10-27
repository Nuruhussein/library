import React from "react";
import { useForm } from "@inertiajs/react";

const CreateBookForm = ({ authors, categories }) => {
    const { data, setData, post } = useForm({
        title: "",
        author_id: "",
        category_id: "",
        description: "",
        isbn: "",
        publication_date: "",
        cover_image: null,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post("/books");
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title</label>
                <input
                    type="text"
                    value={data.title}
                    onChange={(e) => setData("title", e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Author</label>
                <select
                    value={data.author_id}
                    onChange={(e) => setData("author_id", e.target.value)}
                    required
                >
                    <option value="">Select Author</option>
                    {authors.map((author) => (
                        <option key={author.id} value={author.id}>
                            {author.name}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <label>Category</label>
                <select
                    value={data.category_id}
                    onChange={(e) => setData("category_id", e.target.value)}
                    required
                >
                    <option value="">Select Category</option>
                    {categories.map((category) => (
                        <option key={category.id} value={category.id}>
                            {category.name}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <label>Description</label>
                <textarea
                    value={data.description}
                    onChange={(e) => setData("description", e.target.value)}
                />
            </div>
            <div>
                <label>ISBN</label>
                <input
                    type="text"
                    value={data.isbn}
                    onChange={(e) => setData("isbn", e.target.value)}
                />
            </div>
            <div>
                <label>Publication Date</label>
                <input
                    type="date"
                    value={data.publication_date}
                    onChange={(e) =>
                        setData("publication_date", e.target.value)
                    }
                />
            </div>
            <div>
                <label>Cover Image</label>
                <input
                    type="file"
                    onChange={(e) => setData("cover_image", e.target.files[0])}
                />
            </div>
            <button type="submit">Add Book</button>
        </form>
    );
};

export default CreateBookForm;

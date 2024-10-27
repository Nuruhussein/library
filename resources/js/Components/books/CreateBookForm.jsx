import React from "react";
import { useForm } from "@inertiajs/react";

const CreateBookForm = ({ authors, categories }) => {
    const { data, setData, post, errors } = useForm({
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
                {errors.title && <div className="error">{errors.title}</div>}
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
                {errors.author_id && (
                    <div className="error">{errors.author_id}</div>
                )}
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
                {errors.category_id && (
                    <div className="error">{errors.category_id}</div>
                )}
            </div>

            <div>
                <label>Description</label>
                <textarea
                    value={data.description}
                    onChange={(e) => setData("description", e.target.value)}
                    required
                />
                {errors.description && (
                    <div className="error">{errors.description}</div>
                )}
            </div>

            <div>
                <label>ISBN</label>
                <input
                    type="text"
                    value={data.isbn}
                    onChange={(e) => setData("isbn", e.target.value)}
                />
                {errors.isbn && <div className="error">{errors.isbn}</div>}
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
                {errors.publication_date && (
                    <div className="error">{errors.publication_date}</div>
                )}
            </div>

            <div>
                <label>Cover Image</label>
                <input
                    type="file"
                    onChange={(e) => setData("cover_image", e.target.files[0])}
                />
                {errors.cover_image && (
                    <div className="error">{errors.cover_image}</div>
                )}
            </div>

            <button type="submit">Add Book</button>
        </form>
    );
};

export default CreateBookForm;

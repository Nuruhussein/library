// resources/js/Pages/Reviews/Create.jsx

import React from "react";
import { useForm } from "@inertiajs/react";

const CreateReview = ({ bookId }) => {
    const { data, setData, post, errors } = useForm({
        comment: "",
        reviewer: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(`/books/${bookId}/reviews`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Comment</label>
                <textarea
                    value={data.comment}
                    onChange={(e) => setData("comment", e.target.value)}
                />
                {errors.comment && <span>{errors.comment}</span>}
            </div>
            <div>
                <label>Reviewer</label>
                <input
                    type="text"
                    value={data.reviewer}
                    onChange={(e) => setData("reviewer", e.target.value)}
                />
                {errors.reviewer && <span>{errors.reviewer}</span>}
            </div>
            <button type="submit">Submit Review</button>
        </form>
    );
};

export default CreateReview;

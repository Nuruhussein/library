import React, { useState } from "react";
import { useForm } from "@inertiajs/react";

const Create = () => {
    const { data, setData, post, errors } = useForm({
        name: "",
        bio: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post("/authors");
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name</label>
                <input
                    type="text"
                    value={data.name}
                    onChange={(e) => setData("name", e.target.value)}
                />
                {errors.name && <p>{errors.name}</p>}
            </div>
            <div>
                <label>Biography</label>
                <textarea
                    value={data.bio}
                    onChange={(e) => setData("bio", e.target.value)}
                />
                {errors.bio && <p>{errors.bio}</p>}
            </div>
            <button type="submit">Add Author</button>
        </form>
    );
};

export default Create;

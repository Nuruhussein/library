import React, { useState } from "react";
import { Link, useForm } from "@inertiajs/react";
import Dashboard from "../Dashboard";
import { FaPlus } from "react-icons/fa";

const Index = ({ categories }) => {
    const [isModalOpen, setModalOpen] = useState(false);
    const { data, setData, post, errors } = useForm({
        name: "",
        description: "",
    });

    const handleModalOpen = () => setModalOpen(true);
    const handleModalClose = () => {
        setModalOpen(false);
        setData({ name: "", description: "" });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post("/categories", {
            onSuccess: () => handleModalClose(),
        });
    };

    return (
        <Dashboard>
            <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-20">
                <h1 className="text-3xl font-semibold text-gray-800 mb-6">
                    Categories
                </h1>

                <div className="mb-4">
                    <button
                        onClick={handleModalOpen}
                        className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500"
                    >
                        <FaPlus className="mr-2" /> Add New Category
                    </button>
                </div>

                <ul className="space-y-4">
                    {categories.map((category) => (
                        <li
                            key={category.id}
                            className="p-4 border rounded-lg bg-gray-50 hover:bg-gray-100"
                        >
                            <Link
                                href={`/categories/${category.id}`}
                                className="text-xl font-medium text-blue-600 hover:underline"
                            >
                                {category.name}
                            </Link>
                            <p className="text-gray-600 mt-2">
                                {category.description ||
                                    "No description available."}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>

            {isModalOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50 transition-opacity duration-500 ease-in-out"
                    onClick={handleModalClose}
                >
                    <div
                        className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full transform transition-transform duration-300 ease-out scale-95 opacity-0"
                        onClick={(e) => e.stopPropagation()}
                        style={{
                            transform: isModalOpen ? "scale(1)" : "scale(0.95)",
                            opacity: isModalOpen ? "1" : "0",
                            transition:
                                "opacity 0.3s ease-out, transform 0.3s ease-out",
                        }}
                    >
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                            Add Category
                        </h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label className="block text-gray-700">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    value={data.name}
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
                                    className="w-full p-2 border rounded mt-1"
                                    required
                                />
                                {errors.name && (
                                    <p className="text-red-500 text-sm">
                                        {errors.name}
                                    </p>
                                )}
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">
                                    Description
                                </label>
                                <textarea
                                    value={data.description}
                                    onChange={(e) =>
                                        setData("description", e.target.value)
                                    }
                                    className="w-full p-2 border rounded mt-1"
                                />
                                {errors.description && (
                                    <p className="text-red-500 text-sm">
                                        {errors.description}
                                    </p>
                                )}
                            </div>
                            <div className="flex justify-end">
                                <button
                                    type="button"
                                    onClick={handleModalClose}
                                    className="px-4 py-2 bg-gray-300 rounded mr-2"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500"
                                >
                                    Add Category
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </Dashboard>
    );
};

export default Index;

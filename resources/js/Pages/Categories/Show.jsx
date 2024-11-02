import React from "react";
import Dashboard from "../Dashboard";

const Show = ({ category }) => (
    <Dashboard>
        <div className="container w-[1020px]   mx-auto mt-16 px-6">
            <div className="bg-white shadow-lg rounded-lg p-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-6">
                    {category.name}
                </h1>
                <p className="text-lg text-gray-700 mb-8">
                    <span className="font-semibold text-gray-800">
                        Description:
                    </span>{" "}
                    {category.description || "No description available."}
                </p>

                {category.books && category.books.length > 0 ? (
                    <div className="mt-10">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                            Books in {category.name}
                        </h2>
                        <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-2 gap-6">
                            {category.books.map((book) => (
                                <div
                                    key={book.id}
                                    className="bg-gray-50 border border-gray-200 rounded-lg p-4 transition-transform transform hover:scale-105 hover:shadow-md"
                                >
                                    <strong className="block text-xl text-blue-600 font-medium mb-2">
                                        {book.title}
                                    </strong>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <p className="text-gray-600 mt-8 text-center">
                        No books found in this category.
                    </p>
                )}
            </div>
        </div>
    </Dashboard>
);

export default Show;

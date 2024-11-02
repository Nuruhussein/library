<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CategoryController extends Controller
{
    // Display a list of all categories
    public function index()
    {
        $categories = Category::all();
        return Inertia::render('Categories/Index', ['categories' => $categories]);
    }

    // // Show the form for creating a new category
    // public function create()
    // {
    //     return Inertia::render('Categories/Create');
    // }

    // Store a newly created category in the database
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
        ]);

        Category::create($request->only('name', 'description'));
        return redirect()->route('categories.index');
    }

    // Display a single category's details
    public function show(Category $category)
    {
        $category->load('books'); // Assuming each category has related books
        return Inertia::render('Categories/Show', ['category' => $category]);
    }
}

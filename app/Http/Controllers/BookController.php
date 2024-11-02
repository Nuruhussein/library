<?php

namespace App\Http\Controllers;

use App\Models\Book;
use App\Models\Author;
use App\Models\Category;
use App\Models\Review;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;


class BookController extends Controller
{
    // Show the form to create a new book
    public function create()
    {
        $authors = Author::all();
        $categories = Category::all();

        return inertia('Books/Create', [
            'authors' => $authors,
            'categories' => $categories,
        ]);
    }

    // Store a new book and an optional initial review
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'title' => 'required|string|max:255',
            'author_id' => 'required|exists:authors,id',
            'category_id' => 'required|exists:categories,id',
            'description' => 'nullable|string',
            'isbn' => 'nullable|string|max:20',
            'publication_date' => 'nullable|date',
            'cover_image' => 'nullable|image|max:2048', // Limit file size to 2MB
            'comment' => 'nullable|string',
            'reviewer' => 'nullable|string|max:255',
        ]);

        // Handle file upload if there's a cover image
        if ($request->hasFile('cover_image')) {
            $filePath = $request->file('cover_image')->store('cover_images', 'public');
            $validatedData['cover_image'] = $filePath;
        }

        // Create the book
        $book = Book::create([
            'title' => $validatedData['title'],
            'author_id' => $validatedData['author_id'],
            'category_id' => $validatedData['category_id'],
            'description' => $validatedData['description'] ?? null,
            'isbn' => $validatedData['isbn'] ?? null,
            'publication_date' => $validatedData['publication_date'] ?? null,
            'cover_image' => $validatedData['cover_image'] ?? null,
        ]);

        // If a comment and reviewer are provided, create an initial review
        if (!empty($validatedData['comment']) && !empty($validatedData['reviewer'])) {
            $book->reviews()->create([
                'comment' => $validatedData['comment'],
                'reviewer' => $validatedData['reviewer'],
            ]);
        }

        return redirect()->route('books.index')->with('success', 'Book and review added successfully');
    }

public function index()
{
    $books = Book::with('author', 'category')->get(); // Fetch books with authors and categories
    $authors = Author::all(); // Fetch all authors
    $categories = Category::all(); // Fetch all categories

    return Inertia::render('Books/Index', [
        'books' => $books,
        'authors' => $authors,
        'categories' => $categories,
    ]);
}

    // Show a specific book and its reviews
    public function show($id)
    {
        $book = Book::with(['author', 'category', 'reviews'])->findOrFail($id);

        return inertia('Books/Show', [
            'book' => $book,
        ]);
    }

    //   // Show the form to edit a specific book
    // public function edit(Book $book)
    // {
    //     return Inertia::render('Books/Edit', ['book' => $book]);
    // }
    // Show the form for editing the specified book
     public function edit(Book $book)
    {
        $categories = Category::all();
        $authors = Author::all();

        // Return an Inertia response instead of a Blade view
        return Inertia::render('Books/Edit', [
            'book' => $book,
            'categories' => $categories,
            'authors' => $authors,
        ]);
    }

  public function update(Request $request, Book $book)
{
    // Validation rules
    $request->validate([
        'title' => 'nullable|string|max:255',
        'author_id' => 'nullable|exists:authors,id',
        'category_id' => 'nullable|exists:categories,id',
        'description' => 'nullable|string',
        'isbn' => 'nullable|string|max:13',
        'publication_date' => 'nullable|date',
        'cover_image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
    ]);

    // Only update fields that are present in the request
    if ($request->has('title')) {
        $book->title = $request->input('title');
    }
    if ($request->has('author_id')) {
        $book->author_id = $request->input('author_id');
    }
    if ($request->has('category_id')) {
        $book->category_id = $request->input('category_id');
    }
    if ($request->has('description')) {
        $book->description = $request->input('description');
    }
    if ($request->has('isbn')) {
        $book->isbn = $request->input('isbn');
    }
    if ($request->has('publication_date')) {
        $book->publication_date = $request->input('publication_date');
    }
    if ($request->hasFile('cover_image')) {
    // Optional: Delete the old cover image if it exists
    if ($book->cover_image) {
        Storage::disk('public')->delete($book->cover_image);
    }
    // Store the new cover image
    $book->cover_image = $request->file('cover_image')->store('covers', 'public');
}

    // Save the updated book
    $book->save();

    return redirect()->route('books.index')->with('success', 'Book updated successfully.');
}


  // Remove the specified book from storage
    public function destroy(Book $book)
    {
        $book->delete();
        return redirect()->route('books.index')->with('success', 'Book deleted successfully.');
    }
}
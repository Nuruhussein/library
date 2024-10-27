<?php
namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Book;
use App\Models\Author; // Add this line to import the Author model
use App\Models\Category; // Import Category if you're using it as well
use Inertia\Inertia;

class BookController extends Controller
{
   public function index()
{
    $books = Book::with(['author', 'category'])->get();
    $authors = Author::all();
    $categories = Category::all();
    return Inertia::render('Books/Index', [
        'books' => $books,
        'authors' => $authors,
        'categories' => $categories,
    ]);
}


   public function create()
{
    $authors = Author::all();
    $categories = Category::all();
    return Inertia::render('Books/Create', [
        'authors' => $authors,
        'categories' => $categories,
    ]);
}


 public function store(Request $request)
    {
        // Validate incoming request
        $validatedData = $request->validate([
            'title' => 'required|string|max:255',
            'author_id' => 'required|exists:authors,id',
            'category_id' => 'required|exists:categories,id',
            'description' => 'nullable|string',
            'isbn' => 'nullable|string|max:13',
            'publication_date' => 'nullable|date',
            'cover_image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048'
        ]);

        // Handle cover image upload if it exists
        if ($request->hasFile('cover_image')) {
            $validatedData['cover_image'] = $request->file('cover_image')->store('cover_images', 'public');
        }

        // Create a new book record
        Book::create($validatedData);

        return redirect()->route('books.index')->with('success', 'Book created successfully.');
    }


    public function show(Book $book)
    {
        $book->load(['author', 'category']); // Eager load author and category for the show method
        return Inertia::render('Books/Show', ['book' => $book]);
    }
}

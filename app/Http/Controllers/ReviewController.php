<?php

namespace App\Http\Controllers;

use App\Models\Review;
use App\Models\Book;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ReviewController extends Controller
{
    public function store(Request $request, Book $book)
    {
        $request->validate([
            'comment' => 'required|string',
            'reviewer' => 'nullable|string',
        ]);

        $book->reviews()->create([
            'comment' => $request->comment,
            'reviewer' => $request->reviewer,
        ]);

        return redirect()->route('books.show', $book->id);
    }

    public function index(Book $book)
    {
        $reviews = $book->reviews()->with('book')->get();

        return Inertia::render('Reviews/Index', [
            'book' => $book,
            'reviews' => $reviews,
        ]);
    }
     public function show(Review $review)
    {
        return Inertia::render('Reviews/Show', [
            'review' => $review->load('book'),
        ]);
    }
}

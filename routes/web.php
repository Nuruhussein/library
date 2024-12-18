<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BookController;
use App\Http\Controllers\AuthorController;
use Inertia\Inertia;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ReviewController;




Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::post('/books/{book}/reviews', [ReviewController::class, 'store'])->name('reviews.store');
Route::get('/books/{book}/reviews', [ReviewController::class, 'index'])->name('reviews.index');
Route::get('/books/{book}/reviews/{review}', [ReviewController::class, 'show'])->name('reviews.show');
Route::post('/reviews', [ReviewController::class, 'add'])->name('reviews.add');
Route::get('/reviews/create', [ReviewController::class, 'create'])->name('reviews.create');


 Route::post('/reviews', [ReviewController::class, 'add'])->name('reviews.add');
// Route::get('/reviews/{review}', [ReviewController::class, 'show'])->name('reviews.show');
// Route::get('/reviews/create', [ReviewController::class, 'create'])->name('reviews.create');


Route::get('/categories', [CategoryController::class, 'index'])->name('categories.index');
// Route::get('/categories/create', [CategoryController::class, 'create'])->name('categories.create');
Route::post('/categories', [CategoryController::class, 'store'])->name('categories.store');
Route::get('/categories/{category}', [CategoryController::class, 'show'])->name('categories.show');


Route::get('/books', [BookController::class, 'index'])->name('books.index');
Route::get('/books/create', [BookController::class, 'create'])->name('books.create');
Route::post('/books', [BookController::class, 'store'])->name('books.store');
Route::get('/books/{book}', [BookController::class, 'show'])->name('books.show');
Route::post('/books/{book}', [BookController::class, 'update'])->name('books.update');

Route::get('/books/{book}/edit', [BookController::class, 'edit'])->name('books.edit');

Route::delete('/books/{book}', [BookController::class, 'destroy'])->name('books.destroy');



Route::get('/authors', [AuthorController::class, 'index'])->name('authors.index');
Route::get('/authors/create', [AuthorController::class, 'create'])->name('authors.create');
Route::post('/authors', [AuthorController::class, 'store'])->name('authors.store');
Route::get('/authors/{author}', [AuthorController::class, 'show'])->name('authors.show');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';

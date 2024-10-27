<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Review extends Model
{
    use HasFactory;

    protected $fillable = ['book_id', 'user_id', 'comment'];

    // Define relationship with book
    public function book()
    {
        return $this->belongsTo(Book::class);
    }

    // Define relationship with user
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}

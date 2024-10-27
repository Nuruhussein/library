<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Review;

class ReviewsSeeder extends Seeder
{
    public function run()
    {
        Review::create([
            'book_id' => 1,
            // 'user_id' => 1, // Corresponding user ID
            'comment' => 'Great book on history!'
        ]);
        // Add more reviews as needed
    }
}

<?php

use App\Http\Controllers\NewsController;
use Illuminate\Support\Facades\Route;

Route::apiResource('/news', NewsController::class);

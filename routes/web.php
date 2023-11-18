<?php

use App\Http\Controllers\EventoController;
use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::resource('/eventos', EventoController::class)->only(['index', 'store']);

Route::get('/eventos/mostrar', [EventoController::class, 'show']);

Route::post('/eventos/edit/{id}', [EventoController::class, 'edit']);

Route::get('/home', [HomeController::class, 'index'])->name('home');

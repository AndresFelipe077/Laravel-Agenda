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
    return view('evento.index');
})->middleware("auth");

Auth::routes();

Route::group(['middleware' => ['auth']], function () {

    Route::resource('/eventos', EventoController::class)->only(['index', 'store']);

    Route::post('/eventos/mostrar', [EventoController::class, 'show']);

    Route::post('/eventos/edit/{id}', [EventoController::class, 'edit']);

    Route::post('/eventos/update/{evento}', [EventoController::class, 'update']);

    Route::post('/eventos/eliminar/{id}', [EventoController::class, 'destroy']);
});

Route::get('/home', [HomeController::class, 'index'])->name('home');
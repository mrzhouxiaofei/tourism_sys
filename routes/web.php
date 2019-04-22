<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', 'BaseController@index');
Route::get('/menu/get', 'BaseController@getMenu');


Route::group(['prefix' => 'admin'], function () {

    Route::get('area/lists', 'AreaController@getAreaLists');
    Route::get('area/get', 'AreaController@getArea');
    Route::post('area/edit', 'AreaController@editArea');
    Route::post('area/delete', 'AreaController@deleteArea');
});
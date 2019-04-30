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

Route::group(['middleware' => ['check.login']], function () {
//    Route::get('/', 'BaseController@index');
    Route::get('/menu/get', 'BaseController@getMenu');
});

Route::get('/login', function (){
    return view('login');
});
Route::post('/login', 'UserController@login');
Route::get('/logout', 'UserController@logout');

Route::group(['prefix' => 'admin'], function () {

    // 地域
    Route::get('area/lists', 'AreaController@getAreaLists');
    Route::get('area/get', 'AreaController@getArea');
    Route::post('area/edit', 'AreaController@editArea');
    Route::post('area/delete', 'AreaController@deleteArea');
    Route::get('area/select', 'AreaController@selectAllAreas');

    // 景点
    Route::get('spot/lists', 'SpotController@getSpotLists');
    Route::get('spot/get', 'SpotController@getSpot');
    Route::post('spot/edit', 'SpotController@editSpot');
    Route::post('spot/delete', 'SpotController@deleteSpot');

    // 攻略
    Route::get('guideline/lists', 'GuidelineController@getGuidelineLists');
    Route::post('guideline/delete', 'GuidelineController@deleteGuideline');

    // 评论
    Route::get('comment/lists', 'CommentController@getCommentLists');
    Route::post('comment/delete', 'CommentController@deleteComment');

    // 留言
    Route::get('message/lists', 'MessageController@getMessageLists');
    Route::post('message/delete', 'MessageController@deleteMessage');
    Route::post('message/answer', 'MessageController@answerMessage');

    // 用户
    Route::get('user/lists', 'UserController@getUserLists');
    Route::post('user/editStatus', 'UserController@editUserStatus');
});

Route::group(['prefix' => 'front'], function () {

    // 攻略
    Route::get('guideline/lists', 'GuidelineController@getGuidelineLists');
    Route::get('guideline/get', 'GuidelineController@getGuidelineDetail');

});
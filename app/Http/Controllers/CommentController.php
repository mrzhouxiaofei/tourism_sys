<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    /**
     * 删除评论
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function deleteComment(Request $request) {
        $id = $request->get('id', 0);

        $res = Comment::deleteComment($id);

        if ($res) {
            return responseToJson(0, '删除成功');
        } else {
            return responseToJson(1, '删除失败，请重试');
        }
    }

    /**
     * 获取评论列表
     * @param Request $request
     * @return void
     */
    public function getCommentLists(Request $request) {
        $pageSize = $request->pageSize;
        $keyword = $request->keyword;

        $comments = Comment::getCommentLists($pageSize, $keyword);

        if (!empty($comments)) {
            return $comments;
        } else {
            return responseToJson(1, '评论获取失败');
        }
    }
}

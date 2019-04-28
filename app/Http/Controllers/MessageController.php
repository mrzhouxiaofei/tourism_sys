<?php

namespace App\Http\Controllers;

use App\Models\Message;
use Illuminate\Http\Request;

class MessageController extends Controller
{
    /**
     * 回复留言
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function answerMessage(Request $request) {
        $id = $request->get('id', 0);
        $content = $request->get('content');

        if (empty($content)) {
            return responseToJson(1, '回复内容不能为空');
        }

        $res = Message::answerMessage($id, $content);

        if ($res) {
            return responseToJson(0, '回复成功');
        } else {
            return responseToJson(1, '回复失败，请重试');
        }
    }

    /**
     * 删除留言
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function deleteMessage(Request $request) {
        $id = $request->get('id', 0);

        $res = Message::deleteMessage($id);

        if ($res) {
            return responseToJson(0, '删除成功');
        } else {
            return responseToJson(1, '删除失败，请重试');
        }
    }

    /**
     * 获取留言列表
     * @param Request $request
     * @return void
     */
    public function getMessageLists(Request $request) {
        $pageSize = $request->pageSize;
        $keyword = $request->keyword;

        $messages = Message::getMessageLists($pageSize, $keyword);

        if (!empty($messages)) {
            return $messages;
        } else {
            return responseToJson(1, '留言获取失败');
        }
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Message extends Model
{

    /**
     * 回复留言
     * @param $id
     * @return mixed
     */
    public static function answerMessage($id, $content) {
        DB::table('messages')
            ->where('id', $id)
            ->update([
                'type' => '1',
                'updated_at' => getFormatDate()
            ]);

        $id = DB::table('messages')->insertGetId([
                'pid' => $id,
                'author' => 'admin',
                'content' => $content,
                'type' => '0',
                'status' => '0',
                'created_at' => getFormatDate()
            ]);

        if (!empty($id)) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * 删除留言
     * @param $id
     * @return mixed
     */
    public static function deleteMessage($id) {
        $result = DB::table('messages')
            ->where('id', $id)
            ->orWhere('pid', $id)
            ->update([
                'status' => '1',
                'updated_at' => getFormatDate()
            ]);

        if (!empty($result)) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * 获取留言列表
     * @param [type] $pageSize
     * @param [type] $keyword
     * @return void
     */
    public static function getMessageLists($pageSize, $keyword) {
        $messages = DB::table('messages')
            ->where('status', '0')
            ->where('pid', 0)
            ->where('author', 'like', '%'. $keyword .'%')
            ->orderBy('created_at', 'desc')
            ->paginate($pageSize)
            ->toArray();

        $ids = array_column($messages['data'],'id');

        // 获取留言的回复
        $comments = DB::table('messages')
            ->where('status', '0')
            ->whereIn('pid', $ids)
            ->get()
            ->toArray();

        // 循环组装留言和对留言的回复
        if (!empty($comments)) {
            foreach ($messages['data'] as $key => $message) {
                if (isset($message->id)) {
                    foreach ($comments as $comment) {
                        if ($comment->pid == $message->id) {
                            $messages['data'][$key]->comment = $comment;
                        }
                    }
                }
            }
        }

        if (!empty($messages)) {
            return responseToPage($messages);
        } else {
            return false;
        }
    }
}

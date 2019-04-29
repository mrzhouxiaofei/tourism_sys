<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class User extends Model
{
    const TYPE_COMMON = 0;  // 普通用户
    const TYPE_MANAGER = 1;  // 管理员

    /**
     * 获取用户信息
     * @param $loginName 用户名
     * @return mixed
     */
    public static function getUser($loginName) {
        $user = DB::table('users')->where('username', $loginName)->first();

        if (!empty($user)) {
            return $user;
        } else {
            return false;
        }
    }

    /**
     * 修改用户状态
     * @param $user
     * @return bool
     */
    public static function editUserStatus($id, $status) {
        $result = DB::table('users')
            ->where('id', $id)
            ->update([
                'status' => $status,
                'updated_at' => getFormatDate()
            ]);

        if (!empty($result)) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * 获取用户列表
     * @param [type] $pageSize
     * @param [type] $keyword
     * @return void
     */
    public static function getUserLists($pageSize, $keyword) {
        $query = DB::table('users')->where('type', '0');

        if ($keyword) {
            $query->where(function ($q) use ($keyword) {
                $q->orWhere('username', 'like', $keyword . '%')
                    ->orWhere('nickname', 'like', $keyword . '%');
            });
        }
        $result = $query->orderBy('created_at', 'desc')->paginate($pageSize);

        if (!empty($result)) {
            return responseToPage($result);
        } else {
            return false;
        }
    }
}
